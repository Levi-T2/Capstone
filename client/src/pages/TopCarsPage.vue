<template>
    <div class="container-fluid">
        <section v-if="sortedCars" class="row justify-content-around">
            <div class="col-12 d-flex justify-content-around text-light my-1">
                <p class="color-1 mb-0">
                    <i class="mdi mdi-trophy"></i>
                </p>
                <p class="color-2 mb-0">
                    <i class="mdi mdi-trophy"></i>
                </p>
                <p class="color-3 mb-0">
                    <i class="mdi mdi-trophy"></i>
                </p>
            </div>
            <div v-for="car in sortedCars" :key="car.id" class="col-12 col-md-4">
                <CarsComponent :carProp="car">
                </CarsComponent>
            </div>
        </section>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted, } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { logger } from '../utils/Logger';
import CarsComponent from '../components/CarsComponent.vue';
export default {
    setup() {
        onMounted(() => getAllCars());
        async function getAllCars() {
            try {
                await carService.getCars();
            }
            catch (error) {
                Pop.error;
            }
        }
        return {
            // NOTE This function sorts the array and returns only three back, don't touch.
            sortedCars: computed(() => {
                const sortedArray = AppState.cars.sort((a, b) => b.favoriteCount - a.favoriteCount);
                return sortedArray.splice(0, 3);
            })
        };
    },

};
</script>


<style lang="scss" scoped>
.color-1 {
    color: gold;
    font-size: 2.5rem;
    padding: 0.85rem;
}

.color-2 {
    color: silver;
    font-size: 2.5rem;
    padding: 0.85rem;
}

.color-3 {
    color: rgb(165, 93, 42);
    font-size: 2.5rem;
    padding: 0.85rem;
}
</style>