<template>
    <h1>welcome to the top cars page</h1>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup(){
    return {
        cars: computed(()=> AppState.cars)
      }
    }
};
</script>


<style lang="scss" scoped>

</style>