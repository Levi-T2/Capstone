<template>
    <div class="col-12 col-md-6">
        <div>
            <img class="rounded car-picture" :src="cars.imgUrl" alt="">
        </div>
    </div>
    <div class="col-12 col-md-6">
        <div class="fw-bold fs-5 d-flex justify-content-between">
            <div class="display-5 underline">
                {{ cars.year }}
                {{ cars.make }}
                {{ cars.model }}
                <div class="d-flex">
                    <h1 v-if="cars.isSupercharged == true" class="mdi mdi-lightning-bolt fs-2">
                    </h1>
                    <h1 v-if="cars.hasTurbo == true" class="mdi mdi-car-turbocharger fs-2">
                    </h1>
                </div>
            </div>
            <div v-if="cars.creator">
                <div v-if="cars.creator.id == account.id" class="dropdown" title="More Options">
                    <a class="rounded-pill toggle-start text-light" role="button" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i>
                    </a>
                    <ul class="dropdown-menu text-center">
                        <button data-bs-toggle="modal" data-bs-target="#ModModalForm" class="btn btn-success my-1">Post
                            Mod</button>
                        <button @click="deleteCar(cars.id)" class="btn btn-danger my-1">Delete Car</button>
                    </ul>
                </div>
            </div>
        </div>
        <div class="display-5 p-4 fs-5">
            {{ cars.description }}
        </div>
    </div>
    <div class="row align-items-center">
        <div class="col-12 fs-4 display-5 col-md-4 d-flex flex-column text-center mt-5">
            <p class="underline fs-2 py-2">Mechanical</p>
            <p>Engine Type: {{ cars.engine }}</p>
            <p>Horsepower: {{ cars.horsepower }}</p>
            <p>Fuel Type: {{ cars.fuelType }}</p>
            <p>Drivetrain: {{ cars.drivetrain }}</p>
        </div>
        <div class="col-12 fs-3 display-5 col-md-4 d-flex flex-column  text-center mt-5">
            <p class="underline py-2 fs-2">Body</p>
            <p>Weight Capacity: {{ cars.weight }}</p>
            <p>Seat Capacity: {{ cars.seatCapacity }}</p>
            <p>Body-type: {{ cars.bodyType }}</p>
            <p>MPG: {{ cars.mpg }}</p>
        </div>
        <div class="col-12 col-md-4 mt-4">
            <div class="d-flex align-items-center text-center justify-content-around">
                <RouterLink :to="{ name: 'ModList', params: { carId: cars.id } }">
                    <button title="To Mod List" class="btn btn-success fw-bold fill">Mod List <i
                            class="mdi mdi-cog"></i></button>
                </RouterLink>
                <a role="button" type="button" title="Favorite Car" @click="favoriteCar(cars.id)" class="star-clr fs-3 p-1">
                    <i class="mdi mdi-star-plus-outline"></i>
                </a>
            </div>
            <router-link v-if="cars.creator" :to="{ name: 'Profile', params: { profileId: cars?.creator?.id } }">
                <div class="d-flex justify-content-end align-items-center fw-bold mx-2">
                    <p class="p-2 text-center underline text-light">Created By: {{ cars?.creator?.name }}
                    </p>
                    <img class="rounded-circle profile-pic mt-4" :src="cars?.creator?.picture" :alt="cars?.creator?.name">
                </div>
            </router-link>
        </div>
    </div>
    <div v-for="favorite in favorites" :key="favorite.id" class="col-12 p-3">
        <p class="mb-0">{{ favorite.account.name }}</p>
        <!-- <img class="rounded-circle img-fluid" :src="favorite.account.picture"> -->
    </div>
</template>


<script>
import { onMounted } from 'vue';
import { Car } from '../models/Car';
import { Account } from '../models/Account';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService';
import { useRoute } from 'vue-router';
import { Favorite } from '../models/Favorite';
export default {
    props: {
        cars: { type: Car, required: true },
        account: { type: Account, required: true },
        favorites: { type: Favorite, required: true },
    },
    setup() {
        const route = useRoute()
        onMounted(() => {
            getFavoritesForCarById()
        })

        async function getFavoritesForCarById() {
            try {
                const carId = route.params.carId
                await favoritesService.getFavoritesForCarById(carId)
            } catch (error) {
                Pop.error
            }
        }
        return {
            async favoriteCar(carId) {
                try {
                    await favoritesService.favoriteCar(carId)
                } catch (error) {
                    Pop.error(error)
                }
            },
            route,
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
    height: 30%;
    width: 30%;
}

// .account-pic{}

.fill:hover,
.fill:focus {
    transition: ease-in-out 0.3s;
    box-shadow: inset 0 0 0 2em rgb(0, 255, 145);
    color: black;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}

.toggle-start {
    font-size: 0.72rem;
}

.underline {
    text-decoration: underline 1px white;
}

.car-picture {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    object-position: center;
}

.star-clr {
    color: yellow;
}
</style>