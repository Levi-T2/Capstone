import { Auth0Provider } from "@bcwdev/auth0provider";
import { favoritesService } from "../services/FavoritesService.js";
import BaseController from "../utils/BaseController.js";

export class FavoritesController extends BaseController {
    constructor() {
        super('api/favorites')
        this.router
            .get('', this.getAllFavorites)
            .get('/:favoriteId', this.getFavoriteById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.postFavorite)
            .delete('/:favoriteId', this.destroyFavorite)
    }
    async getAllFavorites(request, response, next) {
        try {
            const favorites = await favoritesService.getAllFavorites()
            return response.send(favorites)
        } catch (error) {
            next(error)
        }
    }
    async getFavoriteById(request, response, next) {
        try {
            const favorite = await favoritesService.getFavoriteById()
            return response.send(favorite)
        } catch (error) {
            next(error)
        }
    }
    async postFavorite(request, response, next) {
        try {
            const favData = request.body
            const userId = request.userInfo.id
            favData.accountId = userId
            const favorite = await favoritesService.postFavorite(favData)
            return response.send(favorite)
        } catch (error) {
            next(error)
        }
    }
    async destroyFavorite(request, response, next) {
        try {
            const favId = request.params.favId
            const userId = request.userInfo.id
            const favorite = await favoritesService.destroyFavorite(favId, userId)
            return response.send(favorite)
        } catch (error) {
            next(error)
        }
    }
}