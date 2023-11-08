import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


    class CarService{

         async getCars(){
            const res = await api.get('api/cars')
            logger.log(res.data)
        }


    }

export const carService = new CarService();