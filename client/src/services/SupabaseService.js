import { createClient } from "@supabase/supabase-js"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { supabasePublicKey, supabaseUrl } from "../env"
import Pop from "../utils/Pop"

const seconds = 1000
const minutes = 60 * seconds
const hours = 60 * minutes
const days = 24 * hours

const fileOptions = {
  cacheControl: 1 * hours,
  upsert: true
}

let supabase = null
let bucket = null

class SupabaseService{
    
    async init(bucketName, token){
       try {

        bucket = bucketName || 'default'
        supabase = createClient(supabaseUrl, supabasePublicKey,{
        global: {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        })

        this.list(AppState.account.id)
       } catch (error) {
        logger.log(error);
       }
    }

    async upload(file, name){
        try {
           
            const res = await supabase.storage.from(bucket).upload(`${name}`, file, fileOptions)
            logger.log('UPLOAD COMPLETED', `${supabase.storageUrl}/object/public/${bucket}/CarImages/${res.data.path}`)
            return `${supabase.storageUrl}/object/public/${bucket}/${res.data.path}`



        } catch (error) {
            Pop.error(error)
            logger.log(error)
        }
    }

    async remove(fileName){
        try {

            const res = await supabase.storage.from(bucket).remove([fileName])
            logger.log('SUPABASE REMOVED', res.data)

        } catch (error) {
            logger.log(error)
        }
    }

    async list(folder = ''){
        try {

            if(folder && !folder.endsWith('/')) folder += '/'
            const res = await supabase.storage.from(bucket).list(folder)
            return res.data

        } catch (error) {
            Pop.error(error)
            logger.log(error)
        }
    }

    }


export const supabaseService = new SupabaseService();