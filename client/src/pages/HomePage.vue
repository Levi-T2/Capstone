<template>
  <div class="container-fluid">
    <section class="row justify-content-between">
      <div class="col-6 col-md-2 fs-3 text-white mt-3">
        <p class="transparent-bg rounded text-center">User cars <i class="mdi mdi-car"></i></p>
      </div>
      <div class="col-4 col-md-2 fs-3 text-white text-center mt-3">
        <button class="mb-2 transparent-bg rounded text-white btn btn fs-5" data-bs-toggle="modal"
          data-bs-target="#FilterCars">Filter<i class="mdi mdi-filter"></i></button>

      </div>
    </section>
    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-12 col-md-4">
        <CarsComponent :carProp="car" />
      </div>
    </section>
    <section class="row mb-2">
      <div class="col-12 p-3">
        <PageChanger></PageChanger>
      </div>
    </section>
  </div>


  <!-- MODAL -->
  <div class="modal" tabindex="-1" role="dialog" id="FilterCars">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Filter:</h5>
          <button type="button" class="close btn btn" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <select v-model="selectedFilter" class="form-control">
            <option>All makes</option>
            <option v-for="make in sortedMakes" :key="make">{{ make }}</option>
          </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { AppState } from '../AppState.js'
import CarModalForm from '../components/CarModalForm.vue';
import PageChanger from '../components/PageChanger.vue';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const selectedFilter = ref('')
    const makes = ['GMC', 'Ford', 'Chevy', 'Jeep', 'Dodge', 'Chrysler',
      'Suzuki', 'Toyota', 'Kia', 'Buick', 'BMW', 'Mazda', 'Subaru', 'Hyundai', 'Bentley', 'Volvo',
      'Mercedes-Benz', 'Porsche', 'Ferrari', 'Lexus', 'Jaguar', 'Audi', 'Lancia', 'Lincoln', 'Nissan',
      'Honda', 'Fiat', 'Acura', 'VW', 'Infiniti', 'Tesla', 'Cadillac', 'Rolls-Royce', 'Lamborghini', 'Other']

    const sortedMakes = makes.sort()

    onMounted(() => {
      getCars();
    });
    async function getCars() {
      try {
        await carService.getCars();
      }
      catch (error) {
        Pop.error;
      }
    }
    return {
      selectedFilter,
      makes,
      sortedMakes,
      cars: computed(() => {
        if (selectedFilter.value) {
          return AppState.cars.filter((car) => car.make == selectedFilter.value)
        } else { return AppState.cars }
      }),
    };
  },
  components: { PageChanger }
}
</script>

<style scoped lang="scss">
.transparent-bg {
  background-color: rgba(0, 0, 0, 0.278);
}

.user-cars {
  width: 30%;
}
</style>
