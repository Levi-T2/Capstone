import { dbContext } from "../db/DbContext.js"

class CarsService {

    async getAllCars() {
        const cars = dbContext.Cars.find()
        return cars
    }
}

export const carsService = new CarsService()