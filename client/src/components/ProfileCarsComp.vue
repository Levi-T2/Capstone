
<!-- //NOTE - DO NOT CHANGE THE HTML -->
<template>
    <div class="transparent-bg text-center rounded mb-3 text-white glow box-shadow">
        <router-link v-if="carProp" title="To Car Details" :to="{ name: 'CarDetails', params: { carId: carProp.id } }">

            <img class="p-4 car-picture img-fluid" :src="carProp.imgUrl" alt="">
            <div class="d-flex fs-4 justify-content-center text-light">
                <p class="p-1">{{ carProp.year }}</p>
                <p class="p-1">{{ carProp.make }}</p>
                <p class="p-1">{{ carProp.model }}</p>
            </div>
            <div class="d-flex justify-content-evenly align-items-center">
                <a @click="favoriteCar(carProp.id)" class="fs-4 star-clr" role="button" type="button" title="Favorite Car">
                    <i class="mdi mdi-star-plus-outline fs-2"></i>
                    <p class="mb-2 star-clr"> {{ carProp.favoriteCount }}</p>
                </a>
            </div>

        </router-link>
    </div>
</template>
<!-- //NOTE - DO NOT CHANGE THE HTML -->





<script>

import { Car } from '../models/Car';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService.js'
export default {
    props: { carProp: { type: Car, required: true } },

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
    height: 45vh;
    width: 100%;
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