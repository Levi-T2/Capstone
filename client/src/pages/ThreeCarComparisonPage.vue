<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 col-md-5 d-flex align-items-center justify-content-between p-2 comparison-changer">
                <RouterLink :to="{ name: 'Comparison' }">
                    <button class="btn btn-warning mx-1">2 Car
                        Comparison</button>
                </RouterLink>
                <RouterLink :to="{ name: 'ComparisonThree' }">
                    <button v-if="route.name == 'ComparisonThree'" disabled class="btn btn-warning mx-1">3 Car
                        Comparison</button>
                </RouterLink>
                <RouterLink :to="{ name: 'ComparisonFour' }">
                    <button class="btn btn-warning mx-1">4 Car
                        Comparison</button>
                </RouterLink>
            </div>
            <div class="col-12 col-md-4 d-flex align-items-center justify-content-center p-2 comparison-changer">
                <button v-if="!compareCar3.id" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#FavoritesModal">
                    Pick Cars from Favorites
                </button>
                <button data-bs-toggle="modal" data-bs-target="#ComparisonModal" class="btn btn-info mx-2">
                    See Comparison
                </button>
            </div>
        </section>
        <section class="row">
            <div v-if="compareCar.id" class="col-12 col-md-4 my-2">
                <CompareCar :compareCar="compareCar"></CompareCar>
            </div>
            <div v-if="compareCar2.id" class="col-12 col-md-4 my-2">
                <CompareCar :compareCar="compareCar2"></CompareCar>
            </div>
            <div v-if="compareCar3.id" class="col-12 col-md-4 my-2">
                <CompareCar :compareCar="compareCar3"></CompareCar>
            </div>
        </section>
    </div>
    <FavoritesModalForThree :favorite="favorite"></FavoritesModalForThree>
    <ComparisonModal :compareCar="compareCar" :compareCar2="compareCar2" :compareCar3="compareCar3"></ComparisonModal>
</template>


<script>
import { computed, onMounted } from 'vue';
import { favoritesService } from '../services/FavoritesService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import FavoritesModalForThree from '../components/FavoritesModalForThree.vue';
import CompareCar from '../components/CompareCar.vue';
import ComparisonModal from '../components/ComparisonModal.vue'
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
            compareCar3: computed(() => AppState.compare3),
            route,
        };
    },
    components: { FavoritesModalForThree, CompareCar, ComparisonModal }
};
</script>


<style lang="scss" scoped>
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