<template>
<div class="page-changer p-2 d-flex justify-content-between">
    <button v-if="page <= 0" disabled @click="changePage(page -= 1)" class="btn btn-light rounded-pill">
        <i class="mdi mdi-arrow-left"></i>
        Previous Page</button>
        <button v-else @click="changePage(page -= 1)" class="btn btn-light rounded-pill">
        <i class="mdi mdi-arrow-left"></i>
        Previous Page</button>
    <p class="mb-0">Current Page: {{ page }} </p>
    <button v-if="totalCars < 6" disabled @click="changePage(page += 1)" class="btn btn-light rounded-pill">Next Page
        <i class="mdi mdi-arrow-right"></i>
    </button>
    <button v-else @click="changePage(page += 1)" class="btn btn-light rounded-pill">Next Page
        <i class="mdi mdi-arrow-right"></i>
    </button>
</div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref } from 'vue';
import { carService } from '../services/CarService';
import Pop from '../utils/Pop';


export default {
    setup(){
        const page = ref(0)
    return { 
        page,
        totalCars: computed(() => AppState.carsForPage),
        async changePage(pageNumber) {
            try {
                await carService.getCars(pageNumber)
            } catch (error) {
                Pop.error(error)
            }
        }
     }
    }
};
</script>


<style lang="scss" scoped>

.page-changer{
    background-color: rgba(0, 0, 0, 0.278);
    color: white;
    border-radius: 25px;
}


</style>