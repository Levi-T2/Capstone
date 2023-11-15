
<!-- //NOTE - DO NOT CHANGE THE HTML -->
<template>
    <div class="text-center rounded d-flex flex-row justify-content-between align-items-center text-white">
        <router-link v-if="carProp" title="To Car Details" :to="{ name: 'CarDetails', params: { carId: carProp.id } }">
            <div class="car-display">
                <img class="p-1 car-picture img-fluid" :src="carProp.imgUrl" alt="">
                <div class="d-flex flex-row fs-4 text-light">
                    <p class="p-1">{{ carProp.year }}</p>
                    <p class="p-1">{{ carProp.make }}</p>
                    <p class="p-1">{{ carProp.model }}</p>
                </div>
            </div>
        </router-link>
        <div class="d-flex justify-content-end">
            <a @click="favoriteCar(carProp.id)" class="fs-4 star-clr px-2" role="button" type="button" title="Favorite Car">
                <i class="mdi mdi-star-plus-outline"></i>
            </a>
        </div>

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
    max-width: 35dvh;
    border-radius: 6px;
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

.star-clr {
    color: yellow
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