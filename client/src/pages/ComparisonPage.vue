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
                    <div class="transparent-bg p-3 text-center rounded">
                        <h3 class="text-light p-1 style-border">Car 1</h3>
                        <div>
                            <img :src="compareCar.imgUrl" class="car-img">
                        </div>
                        <div class="text-light my-2">
                            <p class="mb-0 fs-4">
                                {{ compareCar.year }} {{ compareCar.make }} {{ compareCar.model }}
                            </p>
                        </div>
                        <div class="text-light my-2">
                            <p class="mb-0">Engine: {{ compareCar.displacement }} {{ compareCar.engine }}</p>
                            <p>{{ compareCar.horsepower }} Horsepower</p>
                            <p>FuelType: {{ compareCar.fuelType }}</p>
                            <p>MPG: {{ compareCar.mpg }}</p>
                            <p>{{ compareCar.drivetrain }}</p>
                            <p>{{ compareCar.weight }} Lbs.</p>
                            <p>Seating Capacity: {{ compareCar.seatCapacity }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="compareCar2.id" class="col-3 mb-2">
                    <div class="transparent-bg p-3 text-center rounded">
                        <h2 class="text-light style-border p-1">Comparison Table</h2>
                        <div id="compareYear">
                            <div v-if="compareCar.year > compareCar2.year">
                                <p :title="compareCar.year" class="text-light">Newer year: {{ compareCar.make
                                }} {{ compareCar.model }}</p>
                            </div>
                            <div v-else>
                                <p :title="compareCar2.year" class="text-light">Newer year: {{ compareCar2.make }} {{
                                    compareCar2.model }}</p>
                            </div>
                        </div>
                        <div id="compareHorsepower">
                            <div v-if="compareCar.horsepower > compareCar2.horsepower">
                                <p :title="compareCar.horsepower" class="text-light">Higher Horsepower: {{ compareCar.make
                                }}
                                    {{ compareCar.model }}</p>
                            </div>
                            <div v-else>
                                <p :title="compareCar2.horsepower" class="text-light">Higher Horsepower: {{ compareCar2.make
                                }}
                                    {{ compareCar2.model }}</p>
                            </div>
                        </div>
                        <div id="compareWeight">
                            <div v-if="compareCar.weight < compareCar2.weight">
                                <p :title="compareCar.weight" class="text-light">Lower Weight: {{ compareCar.make }} {{
                                    compareCar.model }}</p>
                            </div>
                            <div v-else>
                                <p :title="compareCar2.weight" class="text-light">Lower Weight {{ compareCar2.make }} {{
                                    compareCar2.model }}</p>
                            </div>
                        </div>
                        <div id="compareMPG">
                            <div v-if="compareCar.mpg > compareCar2.mpg">
                                <p :title="compareCar.mpg" class="text-light">Better Mpg: {{ compareCar.make }} {{
                                    compareCar.model }}</p>
                            </div>
                            <div v-else>
                                <p :title="compareCar2.mpg" class="text-light">Better Mpg: {{ compareCar2.make }} {{
                                    compareCar2.model }}</p>
                            </div>
                        </div>
                        <div id="compareCapacity">
                            <div v-if="compareCar.seatCapacity > compareCar2.seatCapacity">
                                <p :title="compareCar.seatCapacity" class="text-light">More Seating: {{ compareCar.make }}
                                    {{ compareCar.model }}</p>
                            </div>
                            <div v-else>
                                <p :title="compareCar2.seatCapacity" class="text-light">More Seating: {{ compareCar2.make }}
                                    {{ compareCar2.model }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="compareCar2.id" class="col-4 mb-2">
                    <div class="transparent-bg p-3 text-center rounded">
                        <h3 class="text-light p-1 style-border">Car 2</h3>
                        <div>
                            <img :src="compareCar2.imgUrl" class="car-img">
                        </div>
                        <div class="text-light my-2">
                            <p class="mb-0 fs-4">
                                {{ compareCar2.year }} {{ compareCar2.make }} {{ compareCar2.model }}
                            </p>
                        </div>
                        <div class="text-light my-2">
                            <p class="mb-0">Engine: {{ compareCar2.displacement }} {{ compareCar2.engine }}</p>
                            <p>{{ compareCar2.horsepower }} Horsepower</p>
                            <p>FuelType: {{ compareCar2.fuelType }}</p>
                            <p>MPG: {{ compareCar2.mpg }}</p>
                            <p>{{ compareCar2.drivetrain }}</p>
                            <p>{{ compareCar2.weight }} Lbs.</p>
                            <p>Seating Capacity: {{ compareCar2.seatCapacity }}</p>
                        </div>

                    </div>
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
export default {
    setup() {
        onMounted(() => {
            clearAppStateFavorites()
            getMyFavorites()
        })
        async function getMyFavorites() {
            try {
                await favoritesService.getFavoritesByAccountId()
            } catch (error) {
                Pop.error(error)
            }
        }
        function clearAppStateFavorites() {
            try {
                AppState.favorite = []
                AppState.compare = {}
                AppState.compare2 = {}
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            favorite: computed(() => AppState.favorite),
            compareCar: computed(() => AppState.compare),
            compareCar2: computed(() => AppState.compare2)
        }
    }
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