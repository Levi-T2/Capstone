<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 col-md-5 d-flex align-items-center justify-content-between p-2 comparison-changer">
                <RouterLink :to="{ name: 'Comparison' }">
                    <button v-if="route.name == 'Comparison'" disabled class="btn btn-warning mx-1">2 Car
                        Comparison</button>
                </RouterLink>
                <RouterLink :to="{ name: 'ComparisonThree' }">
                    <button class="btn btn-warning mx-1">3 Car Comparison</button>
                </RouterLink>
                <RouterLink :to="{ name: 'ComparisonFour' }">
                    <button class="btn btn-warning mx-1">4 Car Comparison</button>
                </RouterLink>
            </div>
            <div class="col-12 col-md-3 d-flex align-items-center justify-content-center p-2 comparison-changer">
                <button v-if="!compareCar2.id" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#FavoritesModal">
                    Pick Cars from Favorites
                </button>
                <button v-else data-bs-toggle="modal" data-bs-target="#FavoritesModal" class="btn btn-info">Change
                    Car</button>
            </div>
        </section>
        <section class="row justify-content-center">
            <div v-if="compareCar.id" class="col-12 col-md-4 my-2 order-2 order-md-1">
                <CompareCarOne :compareCar="compareCar"></CompareCarOne>
            </div>
            <div v-if="compareCar2.id" class="col-12 col-md-3 my-2 order-1 order-md-2">
                <ComparisonTable :compareCar="compareCar" :compareCar2="compareCar2"></ComparisonTable>
            </div>
            <div v-if="compareCar2.id" class="col-12 col-md-4 my-2 order-3 order-md-3">
                <CompareCarTwo :compareCar2="compareCar2"></CompareCarTwo>
            </div>
        </section>
    </div>
    <FavoritesModal :favorite="favorite"></FavoritesModal>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, watchEffect } from 'vue';
import { favoritesService } from '../services/FavoritesService.js'
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import CompareCarOne from '../components/CompareCarOne.vue';
import CompareCarTwo from '../components/CompareCarTwo.vue';
import ComparisonTable from '../components/ComparisonTable.vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        onMounted(() => {
            clearAppStateFavorites();
            getMyFavorites();
        });

        async function getMyFavorites() {
            try {
                await favoritesService.getFavoritesByAccountId();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        function clearAppStateFavorites() {
            try {
                AppState.favorite = [];
                AppState.compare = {};
                AppState.compare2 = {};
                AppState.compare3 = {};
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            favorite: computed(() => AppState.favorite),
            compareCar: computed(() => AppState.compare),
            compareCar2: computed(() => AppState.compare2),
            route,
        };
    },
    components: { CompareCarOne, CompareCarTwo, ComparisonTable }
};
</script>


<style lang="scss" scoped>
.car-img {
    height: 14rem;
    max-width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
}

.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.style-border {
    border-bottom: 3px solid whitesmoke;
}

.comparison-changer {
    border-bottom: 3px solid whitesmoke;
    border-right: 3px solid whitesmoke;
    background-color: #021e38;
}

@media (max-width: 768px) {
    .comparison-changer {
        border-bottom: 3px solid whitesmoke;
        border-right: 0px solid whitesmoke;
        background-color: #021e38;
    }
}
</style>