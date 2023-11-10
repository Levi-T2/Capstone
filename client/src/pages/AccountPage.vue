<template>
  <div class="container-fluid">
    <div class="about text-center">
      <div class="row mt-3 justify-content-center">
        <div class="col-12 col-md-10 bg-dark text-center">
          <div class="col-12">
            <div class="mt-3 text-center">
              <h1>{{ account.name }}</h1>
              <img class="rounded-circle my-3 img-fluid" :src="account.picture" alt="" />
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
      <div v-for="favorite in favorites" :key="favorite.id">
{{ favorite.car }}

      </div>
      
      </div>



    </div>
  </div>
  <AccountModalForm/>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';

import { favoritesService } from '../services/FavoritesService.js';


export default {
    setup() {
      
      onMounted(()=> {
        getFavoritesByAccountId()
      })

      async function getFavoritesByAccountId(userId){
        try {
          await favoritesService.getFavoritesByAccountId(userId)
        } catch (error) {
          Pop.error(error)
        }
      }
        return {



            account: computed(() => AppState.account),
            cars: computed(() => AppState.cars),
            favorite: computed(()=> AppState.favorite)
        };
    },

}
</script>

<style scoped>
img {
  height: 30vh;

}
</style>
