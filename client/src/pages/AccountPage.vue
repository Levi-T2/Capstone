<template>
  <div class="container-fluid">
    <div class="about text-center">

      <div class="row justify-content-between px-3 align-items-start">
        <div class="col-12 col-md-4 transparent-bg text-center my-2 rounded box-shadow">
          <div>
            <div class="mt-3 fs-3 text-center">
              <h1 class=" fs-1 text-light display-3">{{ account.name }}</h1>
              <img class="rounded-circle my-3 img-fluid" :src="account.picture" alt="" />
            </div>
            <div>
              <p class="fs-4 text display-5 text-light wrap-text">{{ account.bio }}</p>
            </div>
            <div class="mb-3 m-0">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AccountModalForm">
                <i title="Edit Account" class="mdi mdi-book-edit"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7 transparent-bg  my-2 rounded box-shadow">
          <section id="changerView" class="my-1">
            <div class="d-flex justify-content-between flex-row">
              <button v-if="hidden == false" @click="hidden = !hidden" title="See Your Favorites"
                class="btn-switcher-fav w-100 my-1">
                <p class="mb-0">
                  <span>
                    See Your Favorites
                  </span>
                </p>
              </button>
              <button v-else @click="hidden = !hidden" title="See Your Cars" class="btn-switcher-car w-100 my-1">
                <p class="mb-0">
                  <span>
                    See Your Cars
                  </span>
                </p>
              </button>
            </div>
            <div v-if="hidden == true">
              <h1 class="text-light">My Favorites</h1>
              <div v-for="favorite in favorites" :key="favorite.id" class="col-12 p-1 my-3 car-card">
                <AccountFavoriteCarCard :favoriteCar="favorite"></AccountFavoriteCarCard>
              </div>
            </div>
            <div v-if="hidden == false">
              <h1 class="text-light">My Cars</h1>
              <div v-for="car in cars" :key="car.id" class="col-12 p-1 my-3 car-card">
                <AccountCarsComp :accountProp="car" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
  <AccountModalForm />
  <ModFormModal></ModFormModal>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';

import { favoritesService } from '../services/FavoritesService.js';
import { accountService } from '../services/AccountService.js'
import AccountCarsComp from '../components/AccountCarsComp.vue'
import { useRoute } from 'vue-router';
import AccountFavoriteCarCard from '../components/AccountFavoriteCarCard.vue';
import ModFormModal from '../components/ModFormModal.vue';


export default {
  setup() {
    const hidden = ref(false)

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
      favorites: computed(() => AppState.favorite),
      hidden,
    };
  },
  components: { AccountCarsComp, AccountFavoriteCarCard, ModFormModal }
}
</script>

<style scoped>
img {
  height: 30vh;

}

.box-shadow {
  box-shadow: 0 5px 10px black;
}

.bg-auto {
  background-color: #021e38;
}

.transparent-bg {
  background-color: rgba(0, 0, 0, 0.499);
}

.underline {
  text-decoration: underline 3px white;
}

.borderA {
  box-shadow: 0px 0px 5px white
}

.borderB {
  box-shadow: 0px 0px 5px white
}

.car-card {
  background-color: #021e38;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 2px rgb(94, 94, 94);
  transition: ease-in-out .285s;
}

.car-card:hover {
  box-shadow: 0px 0px 3px 3px var(--bs-success);
}


.dropdown-item {
  width: 100%;
  max-height: 40dvh;
}

.dropdown-menu {
  background-color: #021e38a1;
  border: 2px solid whitesmoke;
  --bs-dropdown-min-width: 30rem;
  --bs-dropdown-padding-x: 0.75rem;
  max-height: 80dvh;
  overflow-y: scroll;
}

.btn-switcher-fav {
  background-color: #02396d;
  border: 1px solid aliceblue;
  border-radius: 50px;
  color: white;
  padding: 0.25rem;
  transition: ease-in-out 0.4s;
}

.btn-switcher-fav:hover,
.btn-switcher-fav:focus {
  color: black;
  box-shadow:
    inset -22em 0 0 0 yellow,
    inset 22em 0 0 0 yellow;
}

.btn-switcher-car {
  background-color: #02396d;
  border: 1px solid aliceblue;
  border-radius: 50px;
  color: white;
  padding: 0.25rem;
  transition: ease-in-out 0.4s;
}

.btn-switcher-car:hover,
.btn-switcher-car:focus {
  color: black;
  box-shadow:
    inset -22em 0 0 0 rgb(241, 124, 124),
    inset 22em 0 0 0 rgb(241, 124, 124);
}

.profile-box {
  max-height: 48vh;
}


.wrap-text {
  word-wrap: break-word;
}
</style>
