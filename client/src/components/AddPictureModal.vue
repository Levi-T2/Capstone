<template>
    <div class="modal fade" id="addPicture" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content formbg formbrdr">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form @submit.prevent="addImage">

                        <div class="mb-3 p-2">
                            <label class="fs-5 p-2" for="imgUrl">Image</label>
                            <input class="form-control" type="file" accept="image/*,video/*,audio/*" name="fileInput"
                                required>
                        </div>

                        <button class="btn btn-info" type="submit">Submit</button>
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

        const makes = ['Ford', 'GM', 'Chevy', 'Jeep', 'Toyota', 'Honda', 'Nissan', 'Kia', 'Hyundai', 'Tesla', 'Subaru', 'Mazda', 'Porsche', 'Cadillac', 'Volvo', 'Dodge', 'Bentley', 'Mercedes-Benz', 'BMW', 'Ferrari', 'Lancia', 'Fiat', 'Lincoln', 'Buick', 'Lexus', 'Jaguar', 'Suzuki', 'Acura', 'Audi', 'VW', 'Infiniti', 'Tesla', 'Cadillac', 'Rolls-Royce', 'Lamborghini', 'Chrysler', 'Other']
        return {
            editable,
            engines,
            makes,
            drivetrains,
            bodyTypes,
            fuelTypes,
            async addImage(event) {
                try {
                    logger.log(editable.value)
                    const file = event.target.fileInput.files[0]
                    logger.log(file)
                    carService.addImage(file, editable.value)
                    editable.value = {}
                    event.target.reset()

                    Modal.getOrCreateInstance('#addPicture').hide()

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