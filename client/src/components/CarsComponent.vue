<template>
    <div class="transparent-bg text-center rounded mb-3 text-white glow box-shadow">
        <router-link title="To Car Details" :to="{ name: 'CarDetails', params: { carId: carProp.id } }">
        <img class="p-4 car-picture img-fluid" :src="carProp.imgUrl" alt="">
        <div class="d-flex fs-4 fw-bold justify-content-center text-light">
                <p class="p-1">{{ carProp.year }}</p>
                <p class="p-1">{{ carProp.make }}</p>
                <p class="p-1">{{ carProp.model }}</p>
            </div>
        </router-link>

            <div class="d-flex  fw-bold justify-content-evenly align-items-center">
                <p>Mods Done:</p>
                <a @click="favoriteCar(carProp.id)" class="fs-4 star-clr" role="button" type="button" title="Favorite Car">
                    <i class="mdi mdi-star-plus-outline"></i>
                </a>
                <p class="mb-0 star-clr"> {{ carProp.favoriteCount }}</p>
            </div>

            <!-- <div class="d-flex  fw-bold justify-content-evenly">
            <button class="btn btn-success fw-bold">Mod List<i class="mdi mdi-cog mx-1"></i></button>
            <button class="btn btn-primary fw-bold">Like Car<i class="mdi mdi-heart mx-1"></i></button>
        </div> -->

            <div class="d-flex  fw-bold justify-content-center pt-2">
                <p class="p-2">Created by:</p>
                <img class="profile-pic rounded-circle" :src="carProp.creator.picture" :alt="carProp.creator.name">
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
    width: 100%;
    height: 45vh;
    border-radius: 8%;
    object-fit: cover;
    object-position: center;
}



.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.profile-pic {
    width: 10%;
    height: 10%;
    object-position: center;

}

.glow:hover {
    box-shadow: 0px 0px 15px #277cf1;
    transition: ease-in-out 0.3s;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}

.star-clr{
    color: yellow;
}
</style>