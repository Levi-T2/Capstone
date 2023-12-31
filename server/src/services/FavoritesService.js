import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class FavoritesService {
    async getMyFavorites(userId) {
        const favorites = await dbContext.Favorites.find({ accountId: userId }).populate('car')
        // @ts-ignore
        const filteredFavorites = favorites.filter((favorite) => favorite.car != null)
        return filteredFavorites
    }
    async getAllFavorites() {
        const favorites = await dbContext.Favorites.find().populate('car')
        return favorites
    }
    async getAllFavoriteMods() {
        const favoriteMods = await dbContext.FavoriteMods.find().populate('modification')
        return favoriteMods
    }
    async getFavoriteById(favId) {
        const favorite = await dbContext.Favorites.findById(favId)
        if (!favorite) {
            throw new BadRequest(`This is not a valid Id: ${favId}`)
        }
        return favorite
    }
    async getFavoritesByCarId(carId) {
        const favorites = await dbContext.Favorites.find({ carId: carId }).populate('account')
        return favorites
    }
    async postFavorite(favData) {
        const favorite = await dbContext.Favorites.create(favData)
        return favorite
    }
    async postFavoriteMod(favData) {
        const favoriteMod = await dbContext.FavoriteMods.create(favData)
        return favoriteMod

    }
    async destroyFavorite(favId, userId) {
        const favorite = await this.getFavoriteById(favId)
        if (userId != favorite.accountId.toString()) {
            throw new Forbidden(`You lack the authorization to delete this favorite`)
        }
        await favorite.remove()
        return `This favorite has been deleted: ${favId}`
    }

}

export const favoritesService = new FavoritesService()