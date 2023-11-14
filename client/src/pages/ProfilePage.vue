<template>
    <div class="container-fluid background">
        <div v-if="profile" class="row">

            <div class=" text-center transparent-bg box-shadow col-12 col-md-4">
                <img class="rounded-circle profile-pic box p-2 m-3 box-shadow" :src="profile.picture" alt="">
                <p class="fs-2 display-5 text-light underline">{{ profile.name }}</p>
                <p v-if="profile.bio != ''" class="fs-3 display-5 text-light"> Bio: {{ profile.bio }}</p>
            </div>

            <div class="col-12 col-md-7 p-5">

                <div class="row justify-content-center">
                    <p class="text-center fs-1 display-5 text-light underline">Users Cars</p>
                    <div v-for="car in cars" :key="car.id" class="col-12 col-md-8">
                        <ProfileCarsComp :carProp="car" />
                    </div>

                </div>

            </div>




        </div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { profileService } from '../services/ProfileService.js';
import { useRoute } from "vue-router"
import Pop from '../utils/Pop';

import ProfileCarsComp from '../components/ProfileCarsComp.vue';




export default {
    setup() {
        onMounted(() => {
            getProfile();
            getCarsByProfile();
        });
        async function getCarsByProfile() {
            try {
                const profileId = route.params.profileId;
                await profileService.getCarsByProfile(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        const route = useRoute();
        async function getProfile() {
            const profileId = route.params.profileId;
            logger.log(profileId);
            await profileService.getProfile(profileId);
        }
        return {
            profile: computed(() => AppState.profile),
            cars: computed(() => AppState.cars)
        };
    },
    components: { ProfileCarsComp }
};
</script>


<style lang="scss" scoped>
.car-picture {
    width: 100%;
    height: 45vh;
    border-radius: 8%;
    object-fit: cover;
    object-position: center;
}



.transparent-bg {
    background-color: rgba(18, 17, 17, 0.83);
}

.profile-pic {
    width: 95%;
    height: 45vh;
    object-position: center;

}

.underline {
    text-decoration: underline 1px white;
}

.glow:hover {
    box-shadow: 0px 0px 15px #277cf1;
    transition: ease-in-out 0.3s;
}

.box-shadow {
    box-shadow: 0 5px 10px rgb(246, 245, 245);
}



.star-clr {
    color: yellow;
}
</style>