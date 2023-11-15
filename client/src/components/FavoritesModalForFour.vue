<template>
    <div v-if="favorite.car" class="modal fade" id="FavoritesModalFour" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div v-if="favorite" class="modal-content form-bg form-border">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">My Favorite Cars</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-for="favorite in favorite" :key="favorite.id" class="modal-body car-bg m-2">
                    <a @click="selectFavorite(favorite.car)" class="d-flex align-items-center justify-content-around"
                        role="button">
                        <div>
                            <p class="text-light">
                                {{ favorite.car.year }} {{ favorite.car.make }} {{ favorite.car.model }}
                            </p>
                        </div>
                        <div>
                            <img :src="favorite.car.imgUrl" class="car-img">
                        </div>
                    </a>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { Modal } from 'bootstrap';
import { AppState } from '../AppState';
import { Favorite } from '../models/Favorite';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
export default {
    props: {
        favorite: { type: Favorite, required: true }
    },
    setup() {
        return {
            // NOTE Fix error handling when picking same car across 1 to 4
            async selectFavorite(car) {
                try {
                    Pop.toast(`You selected this car! ${car.model}`)
                    if (AppState.compare.id == undefined) {
                        AppState.compare = car
                    } else {
                        if (AppState.compare2.id == undefined) {
                            if (AppState.compare.id == car.id) {
                                Pop.error(`You can't compare a car against itself!`)
                                return
                            } else {
                                AppState.compare2 = car
                            }
                        } else {
                            if (AppState.compare3.id == undefined) {
                                if (AppState.compare2.id == car.id) {
                                    Pop.error(`You can't compare a car against itself!`)
                                    return
                                } else {
                                    AppState.compare3 = car
                                }
                            } else {
                                if (AppState.compare4.id == undefined) {
                                    if (AppState.compare3.id == car.id) {
                                        Pop.error(`You can't compare a car against itself!`)
                                        return
                                    } else {
                                        AppState.compare4 = car
                                    }
                                }
                            }
                        }
                    }
                    Modal.getOrCreateInstance('#FavoritesModalFour').hide()
                } catch (error) {
                    Pop.error(error)
                }
            },
        }
    }
};
</script>


<style lang="scss" scoped>
.form-bg {
    background-color: rgba(0, 0, 128, 0.705);
}

.car-bg {
    background-color: rgba(1, 1, 68, 0.705);
    border-radius: 5px;
    transition: ease-in-out 0.375s;
}

.car-bg:hover {
    box-shadow: 1px 1px 3px 5px rgb(0, 208, 255);

}

.form-border {
    border: 5px solid blue;
}

.car-img {
    height: 8rem;
    width: 8rem;
    background-position: center;
    object-fit: cover;
    border-radius: 5px;
}
</style>