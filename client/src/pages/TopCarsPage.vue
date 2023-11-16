<template>
    <div class="container-fluid">
        <section v-if="sortedCars" class="row justify-content-around">
            <!-- <div class="col-12 d-flex justify-content-around text-light my-1">
                <p class="color-2 mb-0">
                    <i class="mdi mdi-trophy textFont"></i>
                </p>
                <p class="color-3 mb-0">
                    <i class="mdi mdi-trophy textFont"></i>
                </p>
            </div> -->
            <div v-for="car in sortedCars" :key="car.id" class="col-12 col-md-4 my-1" :class="sortedCars[0].id == car.id ? 'order-md-2' : '' ||
                sortedCars[1].id == car.id ? 'order-md-1' : '' || sortedCars[2].id == car.id ? 'order-md-3' : ''">
                <div v-if="sortedCars[0].id == car.id">
                    <p class="background-1 text-center fs-4 fw-bold my-2 rounded-pill">
                        <i class="mdi mdi-trophy"></i>
                        1st Place
                        <i class="mdi mdi-trophy"></i>
                    </p>
                </div>
                <div v-else-if="sortedCars[1].id == car.id">
                    <p class="background-2 text-center fs-4 fw-bold my-2 rounded-pill">
                        2nd Place
                    </p>
                </div>
                <div v-else-if="sortedCars[2].id == car.id">
                    <p class="background-3 text-center fs-4 fw-bold my-2 rounded-pill">
                        3rd Place
                    </p>
                </div>
                <CarsComponent :carProp="car">
                </CarsComponent>
            </div>
            <!-- <div class="col-12 text-center justify-content-around text-light my-1">
                <section class="row justify-content-around text-dark">
                    <p class="col-3 fs-3 background-2 mb-4">
                        2nd Place
                    </p>
                    <p class="col-3 fs-3 background-3 mb-4">
                        3rd Place
                    </p>
                </section>
            </div> -->
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
                const topCars = sortedArray.splice(0, 3);
                logger.log(topCars)
                return topCars;
            }),
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

.background-1 {
    border: 4px solid goldenrod;
    background-color: gold;
}

.background-2 {
    border: 4px solid gray;
    background-color: silver;
}

.background-3 {
    border: 4px solid brown;
    background-color: rgb(165, 93, 42);
    ;
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


// .txt-outline {
//     -webkit-text-stroke-width: 0.55px;
//     -webkit-text-stroke-color: rgb(255, 255, 255);
// }

.textFont {
    // font-size: calc(10px + 9vh);
    // line-height: calc(20px + 20vh);
    /*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
    text-shadow: 0 0 5px gold, 0 0 15px gold, 0 0 20px gold, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: gold;
    // font-family: "Sacramento", cursive;
    text-align: center;
    animation: blink 12s infinite;
    -webkit-animation: blink 12s infinite;
}





@-webkit-keyframes blink {

    20%,
    24%,
    55% {
        color: #111;
        text-shadow: none;
    }

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
        /*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
        text-shadow: 0 0 5px rgb(165, 93, 42), 0 0 15px rgb(165, 93, 42), 0 0 20px rgb(165, 93, 42), 0 0 40px rgb(165, 93, 42), 0 0 60px #ff0000, 0 0 10px rgb(165, 93, 42), 0 0 98px #ff0000;
        color: #fff6a9;
    }
}

@keyframes blink {

    20%,
    24%,
    55% {
        color: #111;
        text-shadow: none;
    }

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
        /*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
        text-shadow: 0 0 10px black, 0 0 15px gold, 0 0 20px goldenrod, 0 0 40px goldenrod, 0 0 60px goldenrod, 0 0 10px goldenrod, 0 0 98px brown;
        color: gold;
    }
}
</style>