import { AppState } from "../AppState";
import { Car } from "../models/Car";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";
import { supabaseService } from "./SupabaseService";


    class CarService{

         async getCars(pageNumber){
            const res = await api.get(`api/cars?pageNumber=${pageNumber}`)
            logger.log(res.data)
            AppState.cars = res.data.cars.map((car) => new Car(car))
            AppState.carsForPage = res.data.carsForPage
            logger.log (AppState.cars)
        }

        async postCar(file, carData){
            const folder = AppState.user.id
            const url = await supabaseService.upload(file, `${folder}/${carData.make}`)
            carData.imgUrl = url

            const res = await api.post('api/cars', carData)
            logger.log('created car', res.data)
            const newCar = new Car(res.data)
            AppState.cars.push(newCar)
        }

        async getCarById(carId) {
            AppState.activeCar = null;
            const res = await api.get(`api/cars/${carId}`);
            logger.log("got car by ID", res.data);
            AppState.activeCar = new Car(res.data);
          }

        async destroyCar(carId) {
            const carIndex = AppState.cars.findIndex(car => car.id == carId)
            const car = AppState.cars[carIndex]
            const storagePath = `${AppState.account.id}/${car.url}`
            const storageRes = await supabaseService.remove(storagePath)
            logger.log('DELETED SUPA', storageRes)
            const res = await api.delete(`api/cars/${carId}`)
            logger.log('Car Deleted', res.data)
            AppState.cars.splice(carIndex, 1)
          
        }

    }

export const carService = new CarService();