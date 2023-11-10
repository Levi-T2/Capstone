<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-3">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#FavoritesModal">
                    My Favorites
                </button>
            </div>
        </section>
    </div>
    <FavoritesModal :favorite="favorite"></FavoritesModal>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { favoritesService } from '../services/FavoritesService.js'
import Pop from '../utils/Pop';
export default {
    setup(){
        onMounted(() => {
            getMyFavorites()
        })
        async function getMyFavorites() {
            try {
                await favoritesService.getFavoritesByAccountId()
            } catch (error) {
                Pop.error(error)
            }
        }
    return { 
        favorite: computed(() => AppState.favorite)
     }
    }
};
</script>


<style lang="scss" scoped>

</style>