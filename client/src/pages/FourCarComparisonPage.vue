<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 col-md-5 d-flex align-items-center justify-content-between p-2 comparison-changer">
                <RouterLink :to="{ name: 'Comparison' }">
                    <button class="btn btn-warning mx-1">2 Car Comparison</button>
                </RouterLink>
                <RouterLink :to="{ name: 'ComparisonThree' }">
                    <button class="btn btn-warning mx-1">3 Car Comparison</button>
                </RouterLink>
                <RouterLink :to="{ name: 'ComparisonFour' }">
                    <button v-if="route.name == 'ComparisonFour'" disabled class="btn btn-warning mx-1">4 Car
                        Comparison</button>
                </RouterLink>
            </div>
            <div class="col-12 col-md-4 d-flex align-items-center justify-content-center p-2 comparison-changer">
                <button v-if="!compareCar4.id" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#FavoritesModalFour">
                    Pick Cars from Favorites
                </button>
                <button data-bs-toggle="modal" data-bs-target="#ComparisonModalFour" class="btn btn-info mx-2">
                    See Comparison
                </button>
            </div>
        </section>
        <section class="row">
            <div v-if="compareCar.id" class="col-12 col-md-3 my-2">
                <CompareCarOne :compareCar="compareCar"></CompareCarOne>
            </div>
            <div v-if="compareCar2.id" class="col-12 col-md-3 my-2">
                <CompareCarTwo :compareCar2="compareCar2"></CompareCarTwo>
            </div>
            <div v-if="compareCar3.id" class="col-12 col-md-3 my-2">
                <CompareCarThree :compareCar3="compareCar3"></CompareCarThree>
            </div>
            <div v-if="compareCar4.id" class="col-12 col-md-3 my-2">
                <CompareCarFour :compareCar4="compareCar4"></CompareCarFour>
            </div>
        </section>
    </div>
    <FavoritesModalForFour :favorite="favorite"></FavoritesModalForFour>
    <ComparisonModalForFour :compareCar="compareCar" :compareCar2="compareCar2" :compareCar3="compareCar3"
        :compareCar4="compareCar4"></ComparisonModalForFour>
</template>


<script>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop';
import FavoritesModalForFour from '../components/FavoritesModalForFour.vue';
import { favoritesService } from '../services/FavoritesService';
import ComparisonModalForFour from '../components/ComparisonModalForFour.vue';
export default {
    setup() {
        const route = useRoute();
        onMounted(() => {
            clearAppStateFavorites();
            getMyFavorites()
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
                AppState.compare4 = {};
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
            compareCar4: computed(() => AppState.compare4),
            route,
        };
    },
    components: { FavoritesModalForFour, ComparisonModalForFour }
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