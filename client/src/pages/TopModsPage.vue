<template>
<div class="container-fluid">
        <section v-if="sortedMods" class="row justify-content-around">
            <div class="col-12 d-flex justify-content-around text-light my-1">
                <p class="color-1 mb-0">
                    <i class="mdi mdi-trophy textFont"></i>

                </p>
                <p class="color-2 mb-0">
                    <i class="mdi mdi-trophy textFont"></i>

                </p>
                <p class="color-3 mb-0">
                    <i class="mdi mdi-trophy textFont"></i>

                </p>
            </div>
            <div v-for="mod in sortedMods" :key="mod" class="col-12 col-md-4">
            <ModsComponent :mod="mod">
            </ModsComponent>
            
            </div>
            <div class="col-12 text-center justify-content-around text-light my-1">
                <section class="row justify-content-around text-dark">

                    <p class=" col-3 fs-3 background-1 mb-4">
                        1st Place
                    </p>
                    <p class="col-3 fs-3 background-2 mb-4">
                        2nd Place
                    </p>
                    <p class="col-3 fs-3 background-3 mb-4">
                        3rd Place
                    </p>

                </section>
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

import ModsComponent from '../components/ModsComponent.vue';
export default {
    setup() {
        onMounted(() => {
            getTopMods();
        });
        async function getTopMods() {
            try {
                await modificationService.getTopMods();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            // topMods: computed(() => AppState.topMods),
            sortedMods: computed(() => {
                const sortedArray = AppState.topMods.sort((a, b) => b.favoriteCount - a.favoriteCount);
                return sortedArray.splice(0, 3);
            }),
            async favoriteMod(modId) {
                try {
                    await favoritesService.favoriteMod(modId);
                }
                catch (error) {
                    Pop.error(error);
                }
            }
        };
    },
    components: { ModsComponent }
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

.color-1 {

color: gold;
font-size: 2.5rem;
padding: 0.85rem;
}

.background-1 {
border: 4px solid goldenrod;
background-color: gold;
}

.background-2 {
border: 4px solid gray;
background-color: silver;
}

.background-3 {
border: 4px solid brown;
background-color: rgb(165, 93, 42);
;
}


.color-2 {
color: silver;
font-size: 2.5rem;
padding: 0.85rem;
}

.color-3 {
color: rgb(165, 93, 42);
font-size: 2.5rem;
padding: 0.85rem;
}



.textFont {
font-size: calc(10px + 9vh);
line-height: calc(20px + 20vh);
/*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
color: #fccaff; */
text-shadow: 0 0 5px gold, 0 0 15px gold, 0 0 20px gold, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
color: gold;
font-family: "Sacramento", cursive;
text-align: center;
animation: blink 12s infinite;
-webkit-animation: blink 12s infinite;
}





@-webkit-keyframes blink {

20%,
24%,
55% {
    color: #111;
    text-shadow: none;
}

0%,
19%,
21%,
23%,
25%,
54%,
56%,
100% {
    /*     color: #fccaff;
text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
  0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
    text-shadow: 0 0 5px rgb(165, 93, 42), 0 0 15px rgb(165, 93, 42), 0 0 20px rgb(165, 93, 42), 0 0 40px rgb(165, 93, 42), 0 0 60px #ff0000, 0 0 10px rgb(165, 93, 42), 0 0 98px #ff0000;
    color: #fff6a9;
}
}

@keyframes blink {

20%,
24%,
55% {
    color: #111;
    text-shadow: none;
}

0%,
19%,
21%,
23%,
25%,
54%,
56%,
100% {
    /*     color: #fccaff;
text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
  0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
    text-shadow: 0 0 10px black, 0 0 15px gold, 0 0 20px goldenrod, 0 0 40px goldenrod, 0 0 60px goldenrod, 0 0 10px goldenrod, 0 0 98px brown;
    color: gold;
}
}
</style>