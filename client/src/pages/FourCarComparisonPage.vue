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
            <div class="col-12 col-md-3 d-flex align-items-center justify-content-center p-2 comparison-changer">
                <button v-if="!compareCar2.id" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#FavoritesModal">
                    Pick Cars from Favorites
                </button>
                <button v-else data-bs-toggle="modal" data-bs-target="#FavoritesModal" class="btn btn-info">Change
                    Car</button>
            </div>
        </section>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        const route = useRoute()
        return {
            compareCar: computed(() => AppState.compare),
            compareCar2: computed(() => AppState.compare2),
            compareCar3: computed(() => AppState.compare3),
            route,
        }
    }
};
</script>


<style lang="scss" scoped>
.comparison-changer {
    border-bottom: 3px solid whitesmoke;
    border-right: 3px solid whitesmoke;
    background-color: #021e38;
}
</style>