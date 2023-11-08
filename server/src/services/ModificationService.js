import { dbContext } from "../db/DbContext.js"

class ModificationService {
    async getAllModifications() {
        const mods = await dbContext.Modifications.find()
        return mods
    }
    async createModification(modData) {
        const mod = await dbContext.Modifications.create(modData)
        await mod.populate('car')
        return mod
    }

}

export const modificationService = new ModificationService()