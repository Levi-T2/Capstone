import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class FavoritesService {
    async favoriteCar(carId) {
        const favData = {}
        favData.carId = carId
        const favorite = await api.post('api/favorites', favData)
        Pop.toast(`You have favorited this car!`)
    }
}

export const favoritesService = new FavoritesService()