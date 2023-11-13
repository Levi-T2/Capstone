<template>
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
          <select class="form-control">
            <option>All makes</option>
            <option v-for="make in makes" :key="make">{{ make }}</option>
          </select>
        </div>
        <div class="modal-footer">
          <button @click="changeType(make)" class="btn my-2  text-dark">Filter Cars</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from '../utils/Logger';
export default {

  setup() {
    const makes = ['GMC', 'Ford', 'Chevy', 'Jeep', 'Dodge', 'Chrysler',
      'Suzuki', 'Toyota', 'Kia', 'Buick', 'BMW', 'Mazda', 'Subaru', 'Hyundai', 'Bentley', 'Volvo',
      'Mercedes-Benz', 'Porsche', 'Ferrari', 'Lexus', 'Jaguar', 'Audi', 'Lancia', 'Lincoln', 'Nissan',
      'Honda', 'Fiat', 'Acura', 'VW', 'Infiniti', 'Tesla', 'Cadillac', 'Rolls-Royce', 'Lamborghini', 'Other']

    const selectedFilter = ref("")

    return {
      cars: computed(() => {
        if (selectedFilter.value) {
          return AppState.cars.filter((car) => car.makes == selectedFilter.value)
        } else { return AppState.cars }
      }),
      makes,
      selectedFilter,

      changeType(makes) {
        logger.log(makes)
        selectedFilter.value = makes;
      }

    }
  }
};
</script>


<style lang="scss" scoped></style>