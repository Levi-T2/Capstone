<template>
    <div class="transparent-bg text-center rounded mb-3 text-white glow box-shadow card">
        <router-link title="To Car Details" :to="{ name: 'CarDetails', params: { carId: carProp.id } }">
            <img class="p-2 car-picture" :src="carProp.imgUrl" alt="Car Cover Img">
            <div class="d-flex fs-2 display-4 justify-content-center  text-light fw-bold">
                <p class="p-1">{{ carProp.year }}</p>
                <p class="p-1">{{ carProp.make }}</p>
                <p class="p-1">{{ carProp.model }}</p>
            </div>
        </router-link>
        <div class="d-flex  display-5 justify-content-evenly align-items-center">
            <p class="fs-4">Mods Done: <span class="fw-bold">{{ carProp.modCount }}</span></p>
            <a @click="favoriteCar(carProp.id)" class="fs-4 star-clr" role="button" type="button" title="Favorite Car">
                <i class="mdi mdi-star-plus-outline"></i>
                <p class="mb-0 star-clr"> {{ carProp.favoriteCount }}</p>
            </a>
        </div>
        <!-- //NOTE - Don't change font or styling -->
        <div v-if="carProp.creator" class="d-flex justify-content-center display-5 pt-2">
            <router-link title="To Profile Page" :to="{ name: 'Profile', params: { profileId: carProp.creator?.id } }"
                class="profile-el">
                <div class="d-flex flex-row align-items-center ">
                    <p class="p-1 px-3 fs-5 text-light">Created by:</p>
                    <img class="profile-pic rounded-circle py-2" :src="carProp.creator?.picture">
                </div>
            </router-link>
        </div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService.js'
import { carService } from '../services/CarService';
export default {
    props: { carProp: { type: Car, required: true } },

    setup() {

        return {
            async favoriteCar(carId) {
                try {
                    await favoritesService.favoriteCar(carId)
                    await carService.getCars()
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
    max-height: 45vh;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
}



.transparent-bg {
    background-color: rgba(0, 0, 0, 0.387);
}

.profile-pic {
    max-height: 6rem;
    max-width: 5rem;
    width: 100%;
    object-fit: cover;
    object-position: center;

}

.glow:hover {
    transition: ease-in-out 0.295s;
    box-shadow: 0px 0px 4px 4px rgb(186, 186, 186);
}


.box-shadow {
    box-shadow: 0 5px 10px black;
}

.profile-el {
    transition: ease-in-out 0.25s;
    border: 1px solid rgba(245, 245, 245, 0);
    margin-bottom: 5px;
}

.profile-el:hover {
    border: 1px solid whitesmoke;
    border-radius: 6px;
}

.star-clr {
    color: yellow;
}
</style>