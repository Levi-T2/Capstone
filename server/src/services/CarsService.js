import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarsService {
    async getCarById(carId) {
        const car = await dbContext.Cars.findById(carId).populate('creator')
        if (!car) {
            throw new BadRequest(`This is not a valid car id: ${carId}`)
        }
        return car
    }
    async createCar(carData) {
        const car = await dbContext.Cars.create(carData)
        await car.populate('creator')
        return car
    }

    async getAllCars() {
        const cars = dbContext.Cars.find()
        return cars
    }
}

export const carsService = new CarsService()