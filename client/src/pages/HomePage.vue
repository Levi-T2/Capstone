<template>
  <div class="container-fluid">
    <section class="row justify-content-between">
      <div class="col-6 col-md-2 fs-3 text-white mt-3">
      <p class="transparent-bg rounded text-center">User cars <i class="mdi mdi-car"></i></p>   
      </div>
      <div class="col-4 col-md-2 fs-3 text-white text-center mt-3">
        <p class="m-0 transparent-bg rounded">Filter<i class="mdi mdi-filter"></i></p>
      </div>
    </section>
    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-12 col-md-4">
        <CarsComponent :carProp="car" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { AppState } from '../AppState.js'

export default {

  setup() {
    onMounted(() => {
      getCars();
    })

    async function getCars() {
      try {
        await carService.getCars();
      } catch (error) {
        Pop.error
      }
    }

    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style scoped lang="scss">
.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.user-cars{
  width: 30%;
}
</style>
