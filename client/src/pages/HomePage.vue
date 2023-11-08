<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-3 p-5">
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

<style scoped lang="scss"></style>
