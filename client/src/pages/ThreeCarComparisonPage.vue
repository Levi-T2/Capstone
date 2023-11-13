<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-1">
                <RouterLink :to="{ name: 'Comparison' }">
                    <button class="btn btn-warning">2 Car Comparison</button>
                </RouterLink>
            </div>
        </section>
        <section class="row">
            <div class="col-12 p-3 text-center">
                <button type="button" class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#FavoritesModal">
                    Pick Cars from Favorites
                </button>
                <button v-if="compareCar3.id" type="button" data-bs-toggle="modal" data-bs-target="#ComparisonModal"
                    class="btn btn-info m-1">See Comparison Table</button>
            </div>
        </section>
        <section class="row mb-3">
            <div v-if="compareCar.id" class="col-4">
                <CompareCarOne :compareCar="compareCar"></CompareCarOne>
            </div>
            <div v-if="compareCar2.id" class="col-4">
                <CompareCarTwo :compareCar2="compareCar2"></CompareCarTwo>
            </div>
            <div v-if="compareCar3.id" class="col-4">
                <CompareCarThree :compareCar3="compareCar3"></CompareCarThree>
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
import CompareCarOne from '../components/CompareCarOne.vue';
import CompareCarTwo from '../components/CompareCarTwo.vue';
import CompareCarThree from '../components/CompareCarThree.vue';
import ComparisonModal from '../components/ComparisonModal.vue'


export default {
    setup() {
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
        };
    },
    components: { FavoritesModalForThree, CompareCarOne, CompareCarTwo, CompareCarThree, ComparisonModal }
};
</script>


<style lang="scss" scoped></style>