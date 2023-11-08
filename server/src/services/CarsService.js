import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

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
        const cars = dbContext.Cars.find().populate('creator')
        return cars
    }
    async destroyCar(carId, userId) {
        const destroyedCar = await this.getCarById(carId)
        if (userId != destroyedCar.creatorId.toString()) {
            throw new Forbidden(`You lack the authorization to destroy this car`)
        }
        await destroyedCar.remove()
        return `This car has been destroyed: ${destroyedCar.id}`
    }
}

export const carsService = new CarsService()