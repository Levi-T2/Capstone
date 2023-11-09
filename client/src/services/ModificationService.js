import { AppState } from "../AppState"
import { Modification } from "../models/Modification"
import { api } from "./AxiosService"

class ModificationService {
    async createMod(modData) {
        const res = await api.post('api/modifications', modData)
        const newMod = new Modification(res.data)
        AppState.activeModList.push(newMod)
    }
}

export const modificationService = new ModificationService()