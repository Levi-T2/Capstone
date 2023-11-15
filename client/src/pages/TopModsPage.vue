<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 text-white mt-3">
                <h1 class="transparent-bg rounded text-center p-2">Top Mods <i class="mdi mdi-cog"></i></h1>
            </div>
        </section>
        <section class="row p-5">
            <div v-for="mod in sortedMods" :key="mod" class="col-12 transparent-bg mb-3 mt-1 rounded glow">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <img class="img-fluid p-3 rounded" :src="mod.imgUrl" :alt="mod.name" :title="mod.name">
                    </div>
                    <div class="col-12 col-md-6 text-white">
                        <div class="d-flex justify-content-between p-3">
                            <p class="fw-bold fs-5">{{ mod.name }}</p>
                            <p class="fw-bold">Favorites: <span>{{ mod.favoriteCount }}</span></p>
                        </div>
                        <div class="p-3">
                            <p>{{ mod.description }}</p>
                        </div>
                        <div class="p-3 d-flex justify-content-between">
                            <p>Creator: <span class="fw-bold">{{ mod.creator.name }}</span> <img class="rounded-circle profile-pic img-fluid" :src="mod.creator.picture" alt=""></p>
                            <i @click="favoriteMod(mod.id)" role="button" class="mdi mdi-star-plus-outline fs-1 text-warning"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { modificationService } from '../services/ModificationService';
import { favoritesService } from '../services/FavoritesService';
import { logger } from '../utils/Logger';
export default {
    setup(){

        onMounted(() => {
            getTopMods()
        })

       async function getTopMods(){
try {
    await modificationService.getTopMods()
} catch (error) {
    Pop.error(error)
}
        }
    return { 
// topMods: computed(() => AppState.topMods),

sortedMods: computed(() => {
const sortedArray = AppState.topMods.sort((a,b) => b.favoriteCount - a.favoriteCount);
return sortedArray.splice(0, 3);
}),

async favoriteMod(modId){
try {
    await favoritesService.favoriteMod(modId)
} catch (error) {
    Pop.error(error)
}
}

     }
    }
};
</script>


<style lang="scss" scoped>
   img{
    width: 100%;
    height: 25vh;
    object-fit: cover;
    object-position: center;
   }

   .transparent-bg {
  background-color: rgba(0, 0, 0, 0.278);
}

.profile-pic {
height:70%;
width: 15%;
object-fit: cover;
object-position: center;
}

.glow:hover {
    box-shadow: 0px 0px 15px #277cf1;
    transition: ease-in-out 0.3s;
}
</style>