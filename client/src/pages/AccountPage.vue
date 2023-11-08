<template>
  <div class="container-fluid">
    <div class="about text-center">
      <div class="row mt-3 justify-content-center">
        <div class="col-12 col-md-10 bg-dark text-center">
          <div class="col-12 col-md-3">
            <div>
              <h1>{{ account.name }}</h1>
              <img class="rounded-circle my-3" :src="account.picture" alt="" />
            </div>
            <div>
              <p>I love cars and going fast</p>
            </div>
          </div>

          <div class="text-end p-4">
            <button  class="mdi mdi-pen-plus btn btn-outline-light">Edit Account</button>
          </div>

        </div>
        </div>

<div>
</div>
    </div>

    <div class="row text-center justify-content-around">

      <div class="col-10  bg-dark my-3">
        <h1 class="fs-3">My Cars</h1> 
      </div>

      <div class="col-10 bg-dark my-3"
      ><h1 class="fs-3">My Favorites</h1> 
      </div>



    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      cars: computed(()=> AppState.cars)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
