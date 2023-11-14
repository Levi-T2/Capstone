import { Auth0Provider } from "@bcwdev/auth0provider";
import { favoritesService } from "../services/FavoritesService.js";
import BaseController from "../utils/BaseController.js";

export class FavoritesController extends BaseController {
    constructor() {
        super('api/favorites')
        this.router
            .get('', this.getAllFavorites)
            .get('/:favoriteId', this.getFavoriteById)
            .get('/mods', this.getAllFavoriteMods)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.postFavorite)
            .post('/mods', this.postFavoriteMod)
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

    async getAllFavoriteMods(request, response, next) {
        try {
            const favoriteMods = await favoritesService.getAllFavoriteMods()
            return response.send(favoriteMods)
        } catch (error) {
            next(error)
        }
    }
    async getFavoriteById(request, response, next) {
        try {
            const favId = request.params.favoriteId
            const favorite = await favoritesService.getFavoriteById(favId)
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

    async postFavoriteMod(request, response, next) {
        try {
            const favData = request.body
            const userId = request.userInfo.id
            favData.accountId = userId
            const favoriteMod = await favoritesService.postFavoriteMod(favData)
            return response.send(favoriteMod)
        } catch (error) {
            next(error)
        }
    }
    async destroyFavorite(request, response, next) {
        try {
            const favId = request.params.favoriteId
            const userId = request.userInfo.id
            const favorite = await favoritesService.destroyFavorite(favId, userId)
            return response.send(favorite)
        } catch (error) {
            next(error)
        }
    }
}