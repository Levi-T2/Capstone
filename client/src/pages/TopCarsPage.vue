<template>

<h1></h1>



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
    
};
</script>


<style lang="scss" scoped></style>