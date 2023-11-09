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

    async getAllCars(query, pageNumber = 0) {
        delete query.pageNumber
        const skip = pageNumber * 3
        const cars = dbContext.Cars.find(query).limit(3).skip(skip)
        await cars.populate('creator')
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
    async editCar(carId, userId, carData) {
        const carUpdating = await this.getCarById(carId)
        if (userId != carUpdating.creatorId.toString()) {
            throw new Forbidden(`You lack the authorization to edit this car`)
        }

        carUpdating.engine = carData.engine || carUpdating.engine
        carUpdating.mpg = carData.mpg || carUpdating.mpg
        carUpdating.horsepower = carData.horsepower || carUpdating.horsepower
        carUpdating.weight = carData.weight || carUpdating.weight
        carUpdating.displacement = carData.displacement || carUpdating.displacement
        carUpdating.description = carData.description || carUpdating.description
        carUpdating.fuelType = carData.fuelType || carUpdating.fuelType
        carUpdating.drivetrain = carData.drivetrain || carUpdating.drivetrain
        carUpdating.hasTurbo = carData.hasTurbo || carUpdating.hasTurbo
        carUpdating.isSupercharged = carData.isSupercharged || carUpdating.isSupercharged

        await carUpdating.save()
        return carUpdating
    }
}

export const carsService = new CarsService()