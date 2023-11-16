import { AppState } from "../AppState.js"
import { Favorite } from "../models/Favorite.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class FavoritesService {    
    // NOTE Make reactive with a .push
    async favoriteCar(carId) {
        const favData = {}
        favData.carId = carId
        const favorite = await api.post('api/favorites', favData)
        Pop.toast(`You have favorited this car!`)
    }

    async favoriteMod(modId){
        const favData = {}
        favData.modId = modId
        const favoriteMod = await api.post('api/favorites/mods', favData)
        Pop.toast('You have favorited this mod!')
        AppState.favoriteMods.push(favoriteMod)
        logger.log(AppState.favoriteMods)
    }

    async getFavoritesByAccountId(){
        const res = await api.get(`account/favorites`)
        logger.log( 'My favorites',res.data)
        const newFavs = res.data.map((favs) => new Favorite(favs))
        AppState.favorite = newFavs
        logger.log(AppState.favorite)
    }
    async getFavoritesForCarById(carId) {
        const res = await api.get(`api/cars/${carId}/favorites`)
        logger.log('These are the favorites for this car:', res.data)
        const newFavs = res.data.map((favs) => new Favorite(favs))
        AppState.activeFavorites = newFavs
        logger.log(AppState.activeFavorites)
    }
    // NOTE This causes lots of errors right now; needs a rework
    async removeFavorite(favoriteId) {
        const res = await api.delete(`api/favorites/${favoriteId}`)
    }

}

export const favoritesService = new FavoritesService()