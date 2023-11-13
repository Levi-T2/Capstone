<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-3 text-center">
                <button v-if="!compareCar2.id" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#FavoritesModal">
                    Pick Cars from Favorites
                </button>
                <button v-else data-bs-toggle="modal" data-bs-target="#FavoritesModal" class="btn btn-info">Change
                    Car</button>
            </div>
            <section class="row justify-content-center">
                <div v-if="compareCar.id" class="col-4 mb-2">
                    <CompareCarOne :compareCar="compareCar"></CompareCarOne>
                </div>
                <div v-if="compareCar2.id" class="col-3 mb-2">
                    <ComparisonTable :compareCar="compareCar" :compareCar2="compareCar2"></ComparisonTable>
                </div>
                <div v-if="compareCar2.id" class="col-4 mb-2">
                    <CompareCarTwo :compareCar2="compareCar2"></CompareCarTwo>
                </div>
            </section>
        </section>
    </div>
    <FavoritesModal :favorite="favorite"></FavoritesModal>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { favoritesService } from '../services/FavoritesService.js'
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import CompareCarOne from '../components/CompareCarOne.vue';
import CompareCarTwo from '../components/CompareCarTwo.vue';
import ComparisonTable from '../components/ComparisonTable.vue';
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
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            favorite: computed(() => AppState.favorite),
            compareCar: computed(() => AppState.compare),
            compareCar2: computed(() => AppState.compare2)
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
</style>