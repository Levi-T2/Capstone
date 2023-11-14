<template>
    <div class="text-center rounded d-flex flex-row align-items-center justify-content-between">
        <RouterLink title="To Car Details" :to="{ name: 'CarDetails', params: { carId: favoriteCar.car.id } }">
            <div class="car-display">
                <img class="p-1 car-picture rounded" :src="favoriteCar.car.imgUrl" alt="Car Image">
                <div class="fs-6 fw-bold text-light d-flex flex-row px-4">
                    <p class="p-1 mb-0">{{ favoriteCar.car.year }}</p>
                    <p class="p-1 mb-0">{{ favoriteCar.car.make }}</p>
                    <p class="p-1 mb-0">{{ favoriteCar.car.model }}</p>
                </div>
            </div>
        </RouterLink>
        <div class="d-flex">
            <a @click="removeFavorite(favoriteCar.id)" class="fs-4 p-2 star-clr" role="button" title="Remove Favorite">
                <i class="mdi mdi-star-off-outline"></i>
            </a>
        </div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Favorite } from '../models/Favorite';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { favoritesService } from '../services/FavoritesService';
import { RouterLink } from 'vue-router';
export default {
    props: {
        favoriteCar: { type: Favorite, required: true }
    },
    setup() {
        return {
            async removeFavorite(favoriteId) {
                try {
                    const yes = await Pop.confirm(`Are you sure you want to unfavorite this?`);
                    if (!yes) {
                        return;
                    }
                    else {
                        await favoritesService.removeFavorite(favoriteId);
                        Pop.toast(`Removed Car from Favorites`);
                    }
                }
                catch (error) {
                    Pop.error(error);
                }
            }
        };
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.star-clr {
    color: red;
}

.car-picture {
    max-width: 25dvh;
}

.car-display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

@media (max-width: 768px) {
    .car-display {
        display: block;
    }
}
</style>