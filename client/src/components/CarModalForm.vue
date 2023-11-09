<template>
    <div class="modal fade" id="carModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content formbg formbrdr">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form @submit.prevent="createCar">

                        <div class="container-fluid">

                            <div class="row text-center text-light">

                                <div class="col-12 d-flex justify-content-around">

                                    <div class="mb-3 p-2">
                                        <label for="model" class="form-label fs-5">Model</label>
                                        <input v-model="editable.model" type="text" class="form-control" id="model"
                                            maxlength="25" required>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="year" class="form-label fs-5">Year</label>
                                        <input v-model="editable.year" type="number" class="form-control" id="year"
                                            maxlength="25" required>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="seatCapacity" class="form-label fs-5">Seats</label>
                                        <input v-model="editable.seatCapacity" type="number" class="form-control"
                                            id="seatCapacity" maxlength="25" required>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="mpg" class="form-label fs-5">MPG</label>
                                        <input v-model="editable.mpg" type="number" class="form-control" id="mpg"
                                            maxlength="25" required>
                                    </div>

                                </div>


                                <div class="col-12 d-flex justify-content-around">

                                    <div class="mb-3 p-2">
                                        <label for="horsepower" class="form-label fs-5">HorsePower</label>
                                        <input v-model="editable.horsepower" type="number" class="form-control"
                                            id="horsepower" maxlength="25" required>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="weight" class="form-label fs-5">Weight</label>
                                        <input v-model="editable.weight" type="number" class="form-control" id="weight"
                                            maxlength="25" required>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="trimModel" class="form-label fs-5">Trim</label>
                                        <input v-model="editable.trimModel" type="text" class="form-control" id="trimModel"
                                            maxlength="25" required>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="displacement" class="form-label fs-5">Displacement</label>
                                        <input v-model="editable.displacement" type="string" class="form-control"
                                            id="displacement" maxlength="25" required>
                                    </div>

                                </div>


                                <div class="col-12 d-flex justify-content-around">




                                    <div class="mb-3 p-2">
                                        <label for="engine" class="form-label fs-5">Engine</label>
                                        <select required v-model="editable.engine" class="form-select" name="" id="">
                                            <option :value="engine" v-for="engine in engines" :key="engine">
                                                {{ engine }}
                                            </option>
                                        </select>
                                    </div>


                                    <div class="mb-3 p-2">
                                        <label for="make" class="form-label fs-5">Make</label>
                                        <select required v-model="editable.make" class="form-select" name="" id="">
                                            <option :value="make" v-for="make in makes" :key="make">
                                                {{ make }}
                                            </option>
                                        </select>
                                    </div>


                                </div>


                                <div class="col-12 d-flex justify-content-around">

                                    <div class="mb-3 p-2">
                                        <label for="drivetrain" class="form-label fs-5">Drivetrain</label>
                                        <select required v-model="editable.drivetrain" class="form-select" name="" id="">
                                            <option :value="drivetrain" v-for="drivetrain in drivetrains" :key="drivetrain">
                                                {{ drivetrain }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="mb-3 v">
                                        <label for="bodyType" class="form-label fs-5">Body Type</label>
                                        <select required v-model="editable.bodyType" class="form-select" name="" id="">
                                            <option :value="bodyType" v-for="bodyType in bodyTypes" :key="bodyType">
                                                {{ bodyType }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="mb-3 p-2">
                                        <label for="fuelType" class="form-label fs-5">Fuel Type</label>
                                        <select required v-model="editable.fuelType" class="form-select" name="" id="">
                                            <option :value="fuelType" v-for="fuelType in fuelTypes" :key="fuelType">
                                                {{ fuelType }}
                                            </option>
                                        </select>
                                    </div>

                                </div>

                                <div class="col-12 d-flex text-center justify-content-around">
                                    <div class="p-5">
                                        <input type="checkbox" id="isSuperCharged" name="isSuperCharged" value="">
                                        <label class="fs-5" for="isSuperCharged"> Is it super charged?</label><br>
                                    </div>

                                    <div class="p-5">
                                        <input type="checkbox" id="hasTurbo" name="hasTurbo" value="">
                                        <label class="fs-5" for="hasTurbo"> Does it have a turbo?</label><br>
                                    </div>
                                </div>

                                <div class="mb-3 p-2">
                                    <label class="fs-5 p-2" for="imgUrl">Image</label>
                                    <input class="form-control" type="file" accept="image/*" name="fileInput" required>
                                </div>

                                <div class="mb-3 p-2">
                                    <label for="description" class="form-label fs-5">Description</label>
                                    <textarea v-model="editable.description" maxlength="500" class="form-control"
                                        id="description" required rows="3"></textarea>
                                </div>

                            </div>
                        </div>








                        <div class="text-center">
                            <button class="btn btn-success" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop.js';
// import { useRouter } from 'vue-router';
import { logger } from '../utils/Logger';
import { carService } from '../services/CarService';
import { useRouter } from 'vue-router';


export default {
    setup() {
        const editable = ref({})
        const router = useRouter();

        const fuelTypes = ['Gas', 'Diesel', 'Hybrid', 'Electric']

        const engines = ['Two-Stroke', 'Four-Stroke', 'I3', 'I4', 'I5', 'I6',
            'V4', 'V6', 'V8', 'V10', 'V12', 'V16', 'F4', 'Boxer', 'Radial', 'Electric', 'Hybrid', 'Other'];

        const bodyTypes = ['Sedan', 'Coupe', 'Roadster', 'SUV', 'Hatchback', 'Van', 'Mini-van', 'Hearse', 'Pickup', '6x6', 'ATV', 'Other']

        const drivetrains = ['4x4', 'RWD', 'FWD', 'AWD']

        const makes = ['Ford', 'GM', 'Chevy', 'Jeep', 'Toyota', 'Honda', 'Nissan', 'Kia', 'Hyundai', 'Tesla', 'Subaru', 'Mazda', 'Porsche', 'Cadillac', 'Volvo', 'Dodge', 'Bentley', 'Mercedes-Benz', 'BMW', 'Ferrari', 'Lancia', 'Fiat', 'Lincoln', 'Buick', 'Lexus', 'Jaguar', 'Suzuki', 'Acura', 'Audi', 'VW', 'Infiniti', 'Tesla', 'Cadillac', 'Rolls-Royce', 'Lamborghini', 'Other']
        return {
            editable,
            engines,
            makes,
            drivetrains,
            bodyTypes,
            fuelTypes,
            async createCar(event) {
                try {
                    logger.log(editable.value)
                    const file = event.target.fileInput.files[0]
                    carService.postCar(file, editable.value)
                    editable.value = {}
                    event.target.reset()

                    Modal.getOrCreateInstance('#carModal').hide()
                    router.push({ name: "CarDetails", params: { carId: event.id } });

                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.formbg {
    background-color: rgba(0, 0, 128, 0.705);
}

.formbrdr {
    border: 5px solid blue;
}
</style>