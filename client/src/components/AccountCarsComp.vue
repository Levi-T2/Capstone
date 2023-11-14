<template>
    <div class="text-center rounded d-flex flex-row justify-content-between align-items-center mb-1 text-white">
        <RouterLink title="To Car Details" :to="{ name: 'CarDetails', params: { carId: accountProp.id } }">
            <div class="car-display">
                <img class="p-1 car-picture rounded" :src="accountProp.imgUrl" alt="Car Image">
                <div class=" fs-6 fw-bold d-flex flex-row text-light px-4">
                    <p class="p-1 mb-0">{{ accountProp.year }}</p>
                    <p class="p-1 mb-0">{{ accountProp.make }}</p>
                    <p class="p-1 mb-0">{{ accountProp.model }}</p>
                </div>
            </div>
        </RouterLink>
        <div class="d-flex px-2">
            <div class="dropdown" title="dropdown menu">
                <a class="rounded-pill toggle-start text-light" role="button" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i>
                </a>
                <ul class="dropdown-menu text-center">
                    <button data-bs-toggle="modal" data-bs-target="#ModModalForm" class="btn btn-success my-1">Post
                        Mod</button>
                    <button @click="deleteCar(accountProp.id)" class="btn btn-danger my-1">Delete Car</button>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService.js'
import { RouterLink } from 'vue-router';
import { carService } from '../services/CarService';
export default {
    props: { accountProp: { type: Car, required: true } },
    setup() {
        return {
            async favoriteCar(carId) {
                try {
                    await favoritesService.favoriteCar(carId);
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async deleteCar(carId) {
                try {
                    const yes = await Pop.confirm(`Are you sure you want to delete this car?`);
                    if (!yes) {
                        return;
                    }
                    await carService.destroyCar(carId);
                }
                catch (error) {
                    Pop.error;
                }
            }
        };
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.car-picture {
    max-width: 25dvh;
    border-radius: 8%;
    object-fit: cover;
    object-position: center;
}

.transparent-bg {
    background-color: rgba(0, 0, 128, 0.477)
}

.profile-pic {
    width: 10%;
    height: 10%;
    object-position: center;
}

.toggle-start {
    font-size: 0.72rem;
}

.car-display {
    display: flex;
    align-items: center;
}

@media (max-width: 768px) {
    .car-display {
        display: block;
    }
}
</style>