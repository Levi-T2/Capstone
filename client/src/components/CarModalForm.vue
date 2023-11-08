<template>
    <div class="modal fade" id="carModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form @submit.prevent="createCar()">



                        <div class="mb-3">
                            <label for="model" class="form-label">Model</label>
                            <input v-model="editable.model" type="text" class="form-control" id="model" maxlength="25"
                                required>
                        </div>

                        <div class="mb-3">
                            <label for="year" class="form-label">Year</label>
                            <input v-model="editable.year" type="number" class="form-control" id="year" maxlength="25"
                                required>
                        </div>

                        <div class="mb-3">
                            <label for="seatCapacity" class="form-label">Seats</label>
                            <input v-model="editable.seatCapacity" type="number" class="form-control" id="seatCapacity"
                                maxlength="25" required>
                        </div>

                        <div class="mb-3">
                            <label for="seatCapacity" class="form-label">Seats</label>
                            <input v-model="editable.seatCapacity" type="number" class="form-control" id="seatCapacity"
                                maxlength="25" required>
                        </div>

                        <div class="mb-3">
                            <label for="seatCapacity" class="form-label">Seats</label>
                            <input v-model="editable.seatCapacity" type="number" class="form-control" id="seatCapacity"
                                maxlength="25" required>
                        </div>


                        <div class="mb-3">
                            <label for="type" class="form-label">Type</label>
                            <select required v-model="editable.type" class="form-select" name="" id="">
                                <option :value="type" v-for="type in types" :key="type">
                                    {{ type }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">description</label>
                            <textarea v-model="editable.description" maxlength="500" class="form-control" id="description"
                                required rows="3"></textarea>
                        </div>



                        <div class="text-end">
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


export default {
    setup() {
        const editable = ref({})
        const types = ["sport", "digital", "concert", "convention"];
        // const router = useRouter();
        return {
            editable,
            types,
            async createCar() {
                try {
                    const carData = editable.value
                    const car = await carService.postCar(carData)
                    logger.log('Here is the Car!', car)
                    Pop.success('car created!')
                    editable.value = {};

                    Modal.getOrCreateInstance('#carModal').hide()
                    // router.push({ name: "EventDetails", params: { carId: car.id } });
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>