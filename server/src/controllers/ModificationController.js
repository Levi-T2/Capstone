import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { modificationService } from "../services/ModificationService.js";

export class ModificationController extends BaseController {
    constructor() {
        super('api/modifications')
        this.router
            .get('', this.getAllModifications)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createModification)
    }

    async getAllModifications(request, response, next) {
        try {
            const mods = await modificationService.getAllModifications()
            return response.send(mods)
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
}