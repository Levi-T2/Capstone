<template>
    <div class="col-12 col-md-6">
        <!-- //STUB - Don't touch!!!!!!!!! -->
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button v-for="(carImg, index) in cars.imgUrls" :key="carImg + 'button'" type="button"
                        data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index + 1"
                        aria-label="Slide 2"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="cars.imgUrl" class="car-picture" alt="...">
                    </div>
                    <div v-for="carImg in cars.imgUrls" :key="carImg + 'img'" class="carousel-item">
                        <img :src="carImg" class="car-picture" alt="...">
                    </div>

                </div>
                <button :disabled="cars.imgUrls == 0" class="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="mdi fs-2 bg-light rounded-circle mdi-arrow-left text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button :disabled="cars.imgUrls == 0" class="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="mdi fs-2 mdi-arrow-right text-dark bg-light rounded-circle" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>




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
                        <button data-bs-toggle="modal" data-bs-target="#addPicture"
                            class="text-center text-light btn btn-primary">Add
                            Picture</button>
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
                <div class="d-flex justify-content-center align-items-center creator-el py-3">
                    <p class="p-2 text-center underline text-light mb-0">Created By: {{ cars?.creator?.name }}
                    </p>
                    <img class="rounded-circle profile-pic" :src="cars?.creator?.picture" :alt="cars?.creator?.name">
                </div>
            </router-link>
        </div>
    </div>
    <div class="col-12 text-end">
        <button class="btn-favorite " title="See Users Who've Favorited" @click="hidden = !hidden">
            <p class="mb-0">
                See Favorites
                <i class="mdi mdi-arrow-down"></i>
            </p>
        </button>
    </div>
    <div v-if="hidden == true" class="col-12 d-favorite">
        <div v-for="favorite in favorites" :key="favorite.id" class="col-3 p-2 text-center">
            <p class="mb-0">{{ favorite.account.name }}</p>
            <img class="rounded-circle account-pic" :src="favorite.account.picture">
        </div>
    </div>
    <AddPictureModal />
</template>


<script>
import { onMounted, ref } from 'vue';
import { Car } from '../models/Car';
import { Account } from '../models/Account';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService';
import { useRoute } from 'vue-router';
import { Favorite } from '../models/Favorite';
import { carService } from '../services/CarService';
import AddPictureModal from './AddPictureModal.vue';
import { hide } from '@popperjs/core';
export default {
    props: {
        cars: { type: Car, required: true },
        account: { type: Account, required: true },
        favorites: { type: Favorite, required: true },
    },
    setup() {
        const hidden = ref(false);
        const route = useRoute();
        onMounted(() => {
            getFavoritesForCarById();
        });
        async function getFavoritesForCarById() {
            try {
                const carId = route.params.carId;
                await favoritesService.getFavoritesForCarById(carId);
            }
            catch (error) {
                Pop.error;
            }
        }
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
            },
            route,
            hidden,
        };
    },
    components: { AddPictureModal }
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

.account-pic {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    object-position: center;
}

.account-style {
    background-color: rgba(8, 8, 55, 0.849);
}

.btn-favorite {
    background-color: rgb(5, 9, 48);
    color: whitesmoke;
    border-radius: 50px;
    border: 1px solid whitesmoke;
    transition: ease-in-out 0.25s
}

.btn-favorite:hover {
    background-color: rgb(33, 42, 127);

}

.fill:hover,
.fill:focus {
    transition: ease-in-out 0.3s;
    box-shadow: inset 0 0 0 2em rgb(0, 255, 145);
    color: black;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}

.d-favorite {
    display: flex;
}

.toggle-start {
    font-size: 0.72rem;
}

.underline {
    text-decoration: underline 1px white;
}

.car-picture {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    object-position: center;
}

.star-clr {
    color: yellow;
}

.creator-el {
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 5px;
    transition: ease-in-out 0.2s;
}

.creator-el:hover {
    border: 1px solid gainsboro;
    border-radius: 5px
}

@media (max-width: 768px) {
    .d-favorite {
        display: block;
    }
}
</style>