<template>
  <div class="container-fluid">
    <div class="about text-center">
      <div class="row mt-3 justify-content-center">
        <div class="col-12 col-md-8 bg-dark borderA text-center">
          <div class="col-12">
            <div class="mt-3 fs-3 text-center">
              <h1 class=" fs-1 underline text display-3">{{ account.name }}</h1>
              <img class="rounded-circle my-3 borderA img-fluid" :src="account.picture" alt="" />
            </div>
            <div>
              <p class="fs-4 text display-5 ">{{ account.bio }}</p>
            </div>
          </div>

          <div class="text-center p-4">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AccountModalForm">
              Edit Account
            </button>
          </div>

        </div>
      </div>

      <div>
      </div>
    </div>

    <div class="row text-center justify-content-around">

      <div class="col-10 borderA bg-dark my-3">
        <h1 class=" my-1 underline fs-2 text display-5">My Cars</h1>

        <div class="row justify-content-center">

          <div v-for="car in cars" :key="car.id" class="col-12 col-md-7 p-3">

            <AccountCarsComp :accountProp="car" />
          </div>

        </div>

      </div>

      <div class="col-10 borderA bg-dark my-3 ">
        <h1 class="fs-2 text underline display-5 ">My Favorites</h1>

        <div class="row justify-content-center">

          <div v-for="favorite in favorites" :key="favorite.id" class=" col-12 col-md-7 p-3">
            <AccountCarsComp :accountProp="favorite.car" />

          </div>

        </div>

      </div>



    </div>
  </div>
  <AccountModalForm />
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';

import { favoritesService } from '../services/FavoritesService.js';
import { accountService } from '../services/AccountService.js'
import AccountCarsComp from '../components/AccountCarsComp.vue'
import { useRoute } from 'vue-router';


export default {
  setup() {
    onMounted(() => {
      getFavoritesByAccountId();
      getCarsByAccount();
    });
    async function getFavoritesByAccountId(userId) {
      try {
        await favoritesService.getFavoritesByAccountId(userId);
      }
      catch (error) {
        Pop.error(error);
      }
    }

    const route = useRoute();

    async function getCarsByAccount() {
      try {
        const accountId = route.params.accountId;
        await accountService.getCarsByAccount(accountId)
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      account: computed(() => AppState.account),
      cars: computed(() => AppState.cars),
      favorites: computed(() => AppState.favorite)
    };
  },
  components: { AccountCarsComp }
}
</script>

<style scoped>
img {
  height: 30vh;

}

.text {
  text-shadow: 5px 5px 15px blue;
}

.underline {
  text-decoration: underline 3px white;
}

.borderA {
  border: 5px solid navy;
}
</style>
