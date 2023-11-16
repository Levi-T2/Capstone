import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";
import { commentService } from "../services/CommentService.js";
import { modificationService } from "../services/ModificationService.js";
import { favoritesService } from "../services/FavoritesService.js";

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getAllCars)
            .get('/:carId', this.getCarById)
            .get('/:carId/comments', this.getCommentsByCarId)
            .get('/:carId/modifications', this.getModificationsByCarId)
            .get('/:carId/favorites', this.getFavoritesByCarId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCar)
            .put('/:carId', this.editCar)
            .delete('/:carId', this.destroyCar)
    }

    async getAllCars(request, response, next) {
        try {
            const query = request.query
            const results = await carsService.getAllCars(query, query.pageNumber)
            return response.send(results)
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
    async getCommentsByCarId(request, response, next) {
        try {
            const carId = request.params.carId
            const comments = await commentService.getCommentsByCarId(carId)
            return response.send(comments)
        } catch (error) {
            next(error)
        }
    }
    async getModificationsByCarId(request, response, next) {
        try {
            const carId = request.params.carId
            const mods = await modificationService.getModificationsByCarId(carId)
            return response.send(mods)
        } catch (error) {
            next(error)
        }
    }
    async getFavoritesByCarId(request, response, next) {
        try {
            const carId = request.params.carId
            const favorites = await favoritesService.getFavoritesByCarId(carId)
            return response.send(favorites)
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
    async editCar(request, response, next) {
        try {
            const carId = request.params.carId
            const userId = request.userInfo.id
            const carData = request.body
            const updatedCar = await carsService.editCar(carId, userId, carData)
            return response.send(updatedCar)
        } catch (error) {
            next(error)
        }
    }
}