<template>
    <h1>This is the Comparison Page</h1>
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
    return {  }
    }
};
</script>


<style lang="scss" scoped>

</style>