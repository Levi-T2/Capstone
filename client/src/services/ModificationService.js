import { AppState } from "../AppState"
import { Modification } from "../models/Modification"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { supabaseService } from "./SupabaseService"

class ModificationService {
    async createMod(file, modData) {
            const folder = AppState.account.id
            const url = await supabaseService.upload(file, `${folder}/modifications/${modData.name}`)
            modData.imgUrl = url

        const res = await api.post('api/modifications', modData)
        const newMod = new Modification(res.data)
        AppState.activeModList.push(newMod)
    }

    async getTopMods(){
        const res = await api.get('api/modifications')
        logger.log(res.data)
        AppState.topMods = res.data.map((pojoMod) => new Modification(pojoMod))
        logger.log('this is the mods in appstate',AppState.topMods)
    }

}

export const modificationService = new ModificationService()