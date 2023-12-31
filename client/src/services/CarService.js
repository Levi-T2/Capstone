import { AppState } from "../AppState";
import { Car } from "../models/Car";
import { Modification } from "../models/Modification";
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
        async getCarsByMake(query){
            const res = await api.get(`api/cars?make=${query}`)
            logger.log(res.data)
            AppState.cars = res.data.cars.map((car) => new Car(car))
            AppState.carsForPage = res.data.carsForPage
            logger.log (AppState.cars)
        }

        async postCar(file, carData){
            const folder = AppState.account.id
            const url = await supabaseService.upload(file, `${folder}/cars/${carData.model}_${carData.make}/${file.name}`)
            carData.imgUrl = url

            const res = await api.post('api/cars', carData)
            logger.log('created car', res.data)
            const newCar = new Car(res.data)
            AppState.cars.push(newCar)
        }

        async addImage(file){
            const folder = AppState.account.id
            const car = AppState.activeCar
            const url = await supabaseService.upload(file, `${folder}/cars/${car.model}_${car.make}/${file.name}`)
            const carData = {id: car.id, additionalImgUrl: url}

            await this.editCar(carData)
        }

        async editCar(carData) {
            const res = await api.put(`api/cars/${carData.id}`, carData)
            logger.log('you edited car', res.data)
            const newCar = new Car(res.data)
            AppState.activeCar = newCar
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
        async getModificationsByCarId(carId){
            AppState.activeModList = null;
            const res = await api.get(`api/cars/${carId}/modifications`)
            const newMods = res.data.map((mod) => new Modification(mod))
            AppState.activeModList = newMods
            logger.log(AppState.activeModList)
        }

    }

export const carService = new CarService();