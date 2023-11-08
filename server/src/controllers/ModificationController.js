import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { modificationService } from "../services/ModificationService.js";

export class ModificationController extends BaseController {
    constructor() {
        super('api/modifications')
        this.router
            .get('', this.getAllModifications)
            .get('/:modId', this.getModificationById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createModification)
            .put('/:modId', this.editModification)
            .delete('/:modId', this.destroyModification)
    }

    async getAllModifications(request, response, next) {
        try {
            const mods = await modificationService.getAllModifications()
            return response.send(mods)
        } catch (error) {
            next(error)
        }
    }
    async getModificationById(request, response, next) {
        try {
            const modId = request.params.modId
            const mod = await modificationService.getModificationById(modId)
            return response.send(mod)
        } catch (error) {
            next(error)
        }
    }
    async createModification(request, response, next) {
        try {
            const modData = request.body
            const userId = request.userInfo.id
            modData.creatorId = userId
            const mod = await modificationService.createModification(modData)
            return response.send(mod)
        } catch (error) {
            next(error)
        }
    }
    async destroyModification(request, response, next) {
        try {
            const modId = request.params.modId
            const userId = request.userInfo.id
            const mod = await modificationService.destroyModification(modId, userId)
            return response.send(mod)
        } catch (error) {
            next(error)
        }
    }
    async editModification(request, response, next) {
        try {
            const modId = request.params.modId
            const userId = request.userInfo.id
            const modData = request.body
            const updatedMod = await modificationService.editModification(modId, userId, modData)
            return response.send(updatedMod)
        } catch (error) {
            next(error)
        }
    }
}