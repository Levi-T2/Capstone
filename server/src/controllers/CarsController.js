import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getAllCars)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCar)

    }

    async getAllCars(request, response, next) {
        try {
            const cars = await carsService.getAllCars()
            return response.send(cars)
        } catch (error) {
            next(error)
        }
    }
    async createCar(request, response, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}