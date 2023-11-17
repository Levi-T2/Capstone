<template>
    <section class="row">
        <div class="page-changer d-flex justify-content-between align-items-center">
            <div>
                <button v-if="page <= 0" disabled @click="changePage(page -= 1)"
                    class="btn btn-light btn-page-prev  rounded-circle m-1" title="To Previous Page">
                    <i class="mdi mdi-arrow-left"></i>
                </button>
                <button v-else @click="changePage(page -= 1)" class="btn btn-light btn-page-prev rounded-circle m-1"
                    title="To Previous Page">
                    <i class="mdi mdi-arrow-left"></i>
                </button>
            </div>
            <div class="">
                <p class="d-flex justify-content-center my-2">Current Page: {{ page + 1 }} </p>
            </div>
            <div>
                <button v-if="totalCars < 1" disabled @click="changePage(page += 1)"
                    class="btn btn-light rounded-circle m-1 btn-page-next" title="To Next Page">
                    <i class="mdi mdi-arrow-right"></i>
                </button>
                <button v-else @click="changePage(page += 1)" class="btn btn-light rounded-circle m-1 btn-page-next"
                    title="To Next Page">
                    <i class="mdi mdi-arrow-right"></i>
                </button>
            </div>
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref } from 'vue';
import { carService } from '../services/CarService';
import Pop from '../utils/Pop';


export default {
    setup() {
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
.page-changer {
    background-color: rgba(0, 0, 0, 0.278);
    color: white;
    border-radius: 70px;
}


// Styles and on-hovers for the buttons
.btn-page-next {
    border: 1px solid rgba(220, 220, 220, 0);
    transition: ease-in-out 0.275s;
}

.btn-page-next:hover,
.btn-page-next:focus {
    box-shadow: inset 6.5em 0 0 0 rgb(6, 161, 6);
    border: 1px solid gainsboro;
}

.btn-page-prev {
    border: 1px solid rgba(220, 220, 220, 0);
    transition: ease-in-out 0.275s;
}

.btn-page-prev:hover,
.btn-page-prev:focus {
    box-shadow: inset 6.5em 0 0 0 rgb(167, 5, 5);
    border: 1px solid gainsboro;
}
</style>