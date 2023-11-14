<template>
    <div class="container-fluid">
        <section class="row borderA">
            <div class="col-12 bg-dark p-1">
                <section id="myDropdowns" class="d-flex flex-row justify-content-center">
                    <!-- SECTION Dropdown menu for My Favorites -->
                    <div class="dropup-center dropup p-1">
                        <a class="btn btn-fav dropdown-toggle p-1" href="#Favorites" role="button" data-bs-toggle="dropdown"
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
                    <div class="dropup-center dropup p-1">
                        <a class="btn btn-car dropdown-toggle p-1 dropdown-toggle" href="#Cars" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i title="My Cars" class="mdi mdi-car"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <div v-for="car in cars" :key="car.id" href="#Cars"
                                    class="col-3 p-1 my-3 dropdown-item car-card">
                                    <AccountCarsComp :accountProp="car" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- !SECTION -->
                </section>
            </div>
        </section>
    </div>
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


<style lang="scss" scoped>
.text {
    text-shadow: 5px 5px 15px blue;
}

.underline {
    text-decoration: underline 3px white;
}

.borderA {
    border-top: 2px solid whitesmoke;
}

.car-card {
    background-color: #021e38;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px rgb(0, 0, 0);
    transition: ease-in-out .285s;
}

.car-card:hover {
    box-shadow: 0px 0px 5px 5px rgb(214, 219, 91);
    background-color: #021e38;
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