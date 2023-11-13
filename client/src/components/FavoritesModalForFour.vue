<template>
    <div class="modal fade" id="FavoritesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>