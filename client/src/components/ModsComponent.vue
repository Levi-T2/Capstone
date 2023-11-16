<template>
    <div class="transparent-bg text-center rounded mb-3 text-white glow box-shadow">
        <img class="p-4 modImg img-fluid" :src="mod.imgUrl" alt="">
        <div class="fs-2 display-4 justify-content-center  text-light fw-bold">
            <p class="p-1">{{ mod.name }}</p>
            <p class="p-1">{{ mod.type }}</p>
            <p class="p-1">{{ mod.description }}</p>
        </div>

        <div class="d-flex  display-5 justify-content-evenly align-items-center">
            <button v-if="account.id == mod.creator?.id" @click="deleteMod(mod.id)" class="btn btn-danger mx-3">Delete
                Mod</button>
            <a @click="favoriteMod(mod.id)" class="fs-4 star-clr" role="button" type="button" title="Favorite Car">
                <i class="mdi mdi-star-plus-outline"></i>
                <p class="mb-0 star-clr"> {{ mod.favoriteCount }}</p>
            </a>
        </div>
        <!-- //NOTE - Don't change font or styling -->
        <div v-if="mod.creator" class="d-flex justify-content-center display-5 pt-2">
            <router-link :to="{ name: 'Profile', params: { profileId: mod.creator?.id } }">
                <div class="d-flex flex-row align-items-center ">
                    <p class="p-1 px-3 fs-5 text-light">Created by:</p>
                    <img class="profile-pic rounded-circle py-2" :src="mod.creator?.picture">
                </div>
            </router-link>
        </div>

    </div>
</template>


<script>
import { Modification } from '../models/Modification';
import { favoritesService } from '../services/FavoritesService.js';
import { modificationService } from '../services/ModificationService';
import Pop from '../utils/Pop.js';


export default {
    props: {
        mod: { type: Modification, required: true }
    },
    setup() {
        return {
            async favoriteMod(modId) {
                try {
                    await favoritesService.favoriteMod(modId)
                } catch (error) {
                    Pop.error(error)
                }
            },

            async deleteMod(modId) {
                try {
                    await modificationService.deleteMod(modId)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.mod-style {
    background-color: rgba(0, 0, 0, 0.278);
    border-radius: 5px;
    box-shadow: 1px 1px 4px 3px rgba(245, 245, 245, 0.688);

}

.modImg {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
}

.purple {
    background-color: purple;
}

.profile-pic {
    max-height: 6rem;
    max-width: 5rem;
    width: 100%;
    object-fit: cover;
    object-position: center;

}

.glow:hover {
    box-shadow: 0px 0px 5px 4px var(--bs-success);
    transition: ease-in-out 0.3s;
}


.box-shadow {
    box-shadow: 0 5px 10px black;
}

.star-clr {
    color: yellow;
}
</style>