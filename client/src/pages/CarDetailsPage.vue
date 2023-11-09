<template>
    <div v-if="cars" class="container-fluid">
        <section class="row">
            <div class="col-12 p-5 text-white">
                <div class="row transparent-bg rounded p-3 box-shadow">
                    <div class="col-12 col-md-6">
                        <div>
                            <img class="rounded img-fluid" :src="cars.imgUrl" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="fw-bold fs-5 d-flex justify-content-between">
                            <div>
                                {{ cars.year }}
                                {{ cars.make }}
                                {{ cars.model }}
                            </div>
                            <div v-if="cars.creator">
                                <div v-if="cars.creator.id == account.id" class="dropdown" title="dropdown menu">
                                    <a class="rounded-pill toggle-start text-light" role="button" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i
                                            class="mdi mdi-circle"></i>
                                    </a>
                                    <ul class="dropdown-menu text-center">
                                        <button class="btn btn-success my-1">Post Mod</button>
                                        <button @click="deleteCar(cars.id)" class="btn btn-danger my-1">Delete Car</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            {{ cars.description }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 d-flex flex-column fw-bold mt-5">
                            <p>Engine Type: {{ cars.engine }}</p>
                            <p>Horsepower: {{ cars.horsepower }}</p>
                            <p>Fuel Type: {{ cars.fuelType }}</p>
                            <p>Weight Capacity: {{ cars.weight }}</p>
                        </div>
                        <div class="col-12 col-md-4 d-flex flex-column fw-bold mt-5">
                            <p>Seat Capacity: {{ cars.seatCapacity }}</p>
                            <p>Body-type: {{ cars.bodyType }}</p>
                            <p>MPG: {{ cars.mpg }}</p>
                            <p>Drivetrain: {{ cars.drivetrain }}</p>
                        </div>
                        <div class="col-12 col-md-4 mt-4">
                            <div class="d-flex fw-bold">
                                <button class="btn btn-success mx-3 fw-bold mb-3">Mod List <i
                                        class="mdi mdi-cog"></i></button>
                                <p>Mods Done:</p>
                            </div>
                            <div class="d-flex fw-bold">
                                <button class="btn btn-primary mx-3 fw-bold mb-3">Like Car <i
                                        class="mdi mdi-heart"></i></button>
                                <p>Likes:</p>
                            </div>
                            <div class="d-flex fw-bold mx-2">
                                <p class="mx-1">Created By:</p>
                                <p>{{ cars?.creator?.name }}</p>
                                <img class="rounded-circle profile-pic mx-1" :src="cars?.creator?.picture"
                                    :alt="cars?.creator?.name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { useRoute } from 'vue-router';
export default {


    setup() {
        const route = useRoute();

        onMounted(() => {
            getCarById()
        })

        async function getCarById() {
            try {
                const carId = route.params.carId
                await carService.getCarById(carId)
            } catch (error) {
                Pop.error(error)
            }
        }

        return {
            cars: computed(() => AppState.activeCar),
            account: computed(() => AppState.account),
            async deleteCar(carId) {
                try {
                    const yes = await Pop.confirm(`Are you sure you want to delete this car?`)
                    if (!yes) {
                        return
                    }
                    await carService.destroyCar(carId)
                } catch (error) {
                    Pop.error
                }
            }

        }
    }
};
</script>


<style lang="scss" scoped>
.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.profile-pic {
    object-fit: cover;
    object-position: center;
    height: 10%;
    width: 10%;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}

.toggle-start {
    font-size: 0.72rem;
}</style>