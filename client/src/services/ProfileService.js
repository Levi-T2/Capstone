import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"

import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {
    async getProfile(profileId) {
        AppState.profile = null
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log(res.data)
        AppState.profile = new Profile(res.data)
    }

    async getCarsByProfile(profileId) {
        logger.log(`profile id: ${profileId}`)
        const res = await api.get(`api/profiles/${profileId}/cars`)
        logger.log('got cars by id', res.data)
        AppState.cars = res.data.map((car) => new Car(car))
    }
}

export const profileService = new ProfileService