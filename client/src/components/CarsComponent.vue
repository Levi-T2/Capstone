<template>
    <div class="transparent-bg text-center rounded mb-3 text-white">

        <img class="p-4 carPicture"
            src="https://th.bing.com/th/id/OIP.s6zSNqXhqNgBYlU7UKQMOgHaD2?w=336&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">

        <div class="d-flex fs-4 fw-bold justify-content-center">
            <p class="p-1">{{ carProp.year }}</p>
            <p class="p-1">{{ carProp.make }}</p>
            <p class="p-1">{{ carProp.model }}</p>
        </div>

        <div class="d-flex  fw-bold justify-content-evenly">
            <p>Mods Done:</p>
            <p>Likes:</p>
        </div>

        <div class="d-flex  fw-bold justify-content-evenly">
            <button class="btn btn-success fw-bold">Mod List</button>
            <button class="btn btn-primary fw-bold">Like Car</button>
        </div>

        <div class="d-flex  fw-bold justify-content-center pt-2">
            <p class="p-2">Created by:</p>
            <img class="profile-pic rounded-circle" :src="carProp.creator.picture" :alt="carProp.creator.name">
        </div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
export default {
    props: { carProp: { type: Car, required: true } },

    setup() {


        return {

        }
    }
};
</script>


<style lang="scss" scoped>
.carPicture {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 25%;
}



.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.profile-pic {
    width: 10%;
    height: 10%;
    object-position: center;

}
</style>