import { AppState } from "../AppState";
import { Car } from "../models/Car";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


    class CarService{

         async getCars(){
            const res = await api.get('api/cars')
            logger.log(res.data)
            AppState.cars = res.data.map((car) => new Car(car))
            logger.log (AppState.cars)
        }

        async postCar(carData){
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
            const res = await api.delete(`api/cars/${carId}`);
            logger.log("car deleted", res.data);
            AppState.activeCar = new Car(res.data);
          
        }


    }

export const carService = new CarService();