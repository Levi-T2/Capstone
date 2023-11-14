<template>
    <div class="text-center rounded d-flex align-items-center mb-1 text-white">
        <img class="p-1 car-picture rounded" :src="accountProp.imgUrl" alt="Car Image">
        <div class=" fs-6 fw-bold d-flex text-light">
            <p class="p-1 mb-0">{{ accountProp.year }}</p>
            <p class="p-1 mb-0">{{ accountProp.make }}</p>
            <p class="p-1 mb-0">{{ accountProp.model }}</p>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService.js'
export default {
    props: { accountProp: { type: Car, required: true } },

    setup() {


        return {
            async favoriteCar(carId) {
                try {
                    await favoritesService.favoriteCar(carId)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
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
</style>