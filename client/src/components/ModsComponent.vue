<template>
    <div class="mod-style text-light text-center">
        <section class="d-flex align-items-center p-3">

            <div class="text-start p-5">
                <h3 class="fs-2 p-5">{{ mod.name }}</h3>
                <p class="fs-4">Mod Type: {{ mod.modType }}</p>
                <p class="fs-5">Description: {{ mod.description }}</p>
            </div>
            <div class="p-3">
                <img :src="mod.imgUrl" class="img-fluid" alt="Mod Image" :title="mod.name">
            </div>

        </section>

        <div class="d-flex justify-content-evenly p-3">
            <button class="btn purple text-light fs-5">Favorite This Mod <i
                    class="mdi mdi-account-star-outline fs-3"></i></button>
            <p class="fs-2">Favorites: 0 <i class="mdi mdi-star"></i></p>
        </div>
    </div>
</template>


<script>
import { Modification } from '../models/Modification';


export default {
    props: {
        mod: { type: Modification, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.mod-style {
    background-color: rgba(0, 0, 0, 0.278);
    border-radius: 5px;
    box-shadow: 1px 1px 4px 3px rgba(245, 245, 245, 0.688);

}

.purple {
    background-color: purple;
}
</style>