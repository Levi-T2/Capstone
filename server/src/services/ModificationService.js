import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ModificationService {
    async getAllModifications() {
        const mods = await dbContext.Modifications.find()
        return mods
    }
    async getModificationById(modId) {
        const mod = await dbContext.Modifications.findById(modId).populate('car')
        if (!mod) {
            throw new BadRequest(`This is not a valid modification id: ${modId}`)
        }
        return mod
    }
    async getModificationsByCarId(carId) {
        const mods = await dbContext.Modifications.find({ carId: carId }).populate('creator car')
        return mods
    }
    async createModification(modData) {
        const mod = await dbContext.Modifications.create(modData)
        await mod.populate('creator')
        await mod.populate('car')
        return mod
    }
    async destroyModification(modId, userId) {
        const mod = await this.getModificationById(modId)
        if (userId != mod.creatorId.toString()) {
            throw new Forbidden(`You lack the authorization to destroy ths modification`)
        }
        await mod.remove()
        return `This modification has been destroyed: ${mod.id}`
    }

}

export const modificationService = new ModificationService()