<template>
    <div class="transparent-bg text-center rounded mb-3 text-white glow box-shadow">

        <img class="p-4 car-picture img-fluid" :src="accountProp.imgUrl" alt="">
        <div class="d-flex fs-4 fw-bold justify-content-center text-light">
            <p class="p-1">{{ accountProp.year }}</p>
            <p class="p-1">{{ accountProp.make }}</p>
            <p class="p-1">{{ accountProp.model }}</p>
        </div>


        <div class="d-flex  fw-bold justify-content-evenly align-items-center">

            <a @click="favoriteCar(accountProp.id)" class="fs-4 star-clr" role="button" type="button" title="Favorite Car">
                <i class="mdi mdi-star-plus-outline fs-2"></i>
                <p class="mb-2 star-clr"> {{ accountProp.favoriteCount }}</p>
            </a>
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
    width: 100%;
    height: 45vh;
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

.glow:hover {
    box-shadow: 0px 0px 15px #277cf1;
    transition: ease-in-out 0.3s;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}

.star-clr {
    color: yellow;
}
</style>