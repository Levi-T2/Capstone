<template>
  <div class="container-fluid">
    <div class="about text-center">
      <div class="row mt-3 justify-content-center">
        <div class="col-12 col-md-10 bg-dark text-center">
          <div class="col-12">
            <div class="mt-3 text-center">
              <h1>{{ account.name }}</h1>
              <img class="rounded-circle my-3" :src="account.picture" alt="" />
            </div>
            <div>
              <p>{{ account.bio }}</p>
            </div>
          </div>

          <div class="text-end p-4">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AccountModalForm">
              Edit Account
            </button>
          </div>

        </div>
        </div>

<div>
</div>
    </div>

    <div  class="row text-center justify-content-around">

      <div class="col-10  bg-dark my-3">
        <h1 class="fs-3">My Cars</h1> 
      </div>

      <div class="col-10 bg-dark my-3 "
      ><h1 class="fs-3">My Favorites</h1> 
      
      
      </div>



    </div>
  </div>
  <AccountModalForm/>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';

export default {
    setup() {
        return {
            account: computed(() => AppState.account),
            cars: computed(() => AppState.cars)
        };
    },

}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
