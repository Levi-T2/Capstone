<template>
  <div class="container-fluid">
    <section class="row">

      <div class="text-center">


        <div class="col-12 d-flex justify-content-around pt-3">

          <button class="btn fs-5 transparent-bg text-light">
            User's Cars <i class="mdi mdi-car"></i>
          </button>

          <button class="btn fs-5 transparent-bg text-light">
            Filter By <i class="mdi mdi-arrow-down-drop-circle-outline"></i>
          </button>
        </div>

      </div>


      <div v-for="car in cars" :key="car.id" class="col-12 col-md-4 p-5">
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
</style>
