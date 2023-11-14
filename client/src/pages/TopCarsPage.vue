<template>
<div v-for="car in cars" :key="car">
    {{ cars.imgUrl }}
</div>



<CarsComponent />
</template>


<script>
import { AppState } from '../AppState';
import { computed,  } from 'vue';
import CarsComponent from '../components/CarsComponent.vue';
export default {
    
    setup() {
        return {
            cars: computed(() => AppState.cars)
        };
    },
    components: { CarsComponent }
};
</script>


<style lang="scss" scoped></style>