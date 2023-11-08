import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getAllCars)
            .get('/:carId', this.getCarById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCar)
            .delete('/:carId', this.destroyCar)

    }

    async getAllCars(request, response, next) {
        try {
            const cars = await carsService.getAllCars()
            return response.send(cars)
        } catch (error) {
            next(error)
        }
    }
    async getCarById(request, response, next) {
        try {
            const carId = request.params.carId
            const car = await carsService.getCarById(carId)
            return response.send(car)
        } catch (error) {
            next(error)
        }
    }
    async createCar(request, response, next) {
        try {
            const carData = request.body
            const userId = request.userInfo.id
            carData.creatorId = userId
            const car = await carsService.createCar(carData)
            return response.send(car)
        } catch (error) {
            next(error)
        }
    }
    async destroyCar(request, response, next) {
        try {
            const carId = request.params.carId
            const userId = request.userInfo.id
            const destroyedCar = await carsService.destroyCar(carId, userId)
            return response.send(destroyedCar)
        } catch (error) {
            next(error)
        }
    }
}