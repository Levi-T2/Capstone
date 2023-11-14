<template>
  <div class="container-fluid">
    <div class="about text-center">
      <div class="row justify-content-start">
        <div class="col-12 col-md-5 bg-dark borderA text-center m-2">
          <div class="col-12">
            <div class="mt-3 fs-3 text-center">
              <h1 class=" fs-1 underline text display-3">{{ account.name }}</h1>
              <img class="rounded-circle my-3 borderA img-fluid" :src="account.picture" alt="" />
            </div>
            <div>
              <p class="fs-4 text display-5 ">{{ account.bio }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-1 bg-dark borderB m-2">
          <section id="myDropdowns" class="d-flex flex-column align-items-center my-1">
            <!-- SECTION Dropdown menu for My Favorites -->
            <div class="btn-group dropend">
              <a class="btn btn-fav dropdown-toggle p-1 my-2" href="#Favorites" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i title="My Favorites" class="mdi mdi-star"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div v-for="favorite in favorites" :key="favorite.id" href="#Favorites"
                    class="col-3 p-1 my-3 car-card dropdown-item">
                    <AccountFavoriteCarCard :favoriteCar="favorite"></AccountFavoriteCarCard>
                  </div>
                </li>
              </ul>
            </div>
            <!-- !SECTION -->
            <!-- SECTION Dropdown menu for My Cars -->
            <div class="btn-group dropend">
              <a class="btn btn-car dropdown-toggle p-1 my-2 dropdown-toggle" href="#Cars" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i title="My Cars" class="mdi mdi-car"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div v-for="car in cars" :key="car.id" href="#Cars" class="col-3 p-1 my-3 dropdown-item car-card">
                    <AccountCarsComp :accountProp="car" />
                  </div>
                </li>
              </ul>
            </div>
            <!-- !SECTION -->
            <div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AccountModalForm">
                <i title="Edit Account" class="mdi mdi-book-edit"></i>
              </button>
            </div>
          </section>
        </div>
      </div>
      <div>
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
import AccountFavoriteCarCard from '../components/AccountFavoriteCarCard.vue';


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
  components: { AccountCarsComp, AccountFavoriteCarCard }
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
  border: 3.5px solid navy;
  border-radius: 3px;
}

.borderB {
  border: 3.5px solid navy;
  border-radius: 20px;
}

.car-card {
  background-color: #021e38;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 3px rgb(0, 0, 0);
  transition: ease-in-out .285s;
}

.car-card:hover {
  box-shadow: 0px 0px 5px 5px rgb(214, 219, 91);
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

.btn-car {
  background-color: red;
}

.btn-fav {
  background-color: yellow;
}
</style>
