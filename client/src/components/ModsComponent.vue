<template>
    <div class="mod-style container-fluid text-light text-center">

        <div class="row">

            <section class="d-md-flex align-items-center p-3">

                <div class="text-start col-12 col-md-5 p-5">
                    <h3 class="fs-2 p-5">{{ mod.name }}</h3>
                    <p class="fs-4">Mod Type: {{ mod.modType }}</p>
                    <p class="fs-5">Description: {{ mod.description }}</p>
                </div>
                <div class="p-3 col-12 col-md-5">
                    <img :src="mod.imgUrl" class="modImg" alt="Mod Image" :title="mod.name">
                </div>

            </section>

            <div class="d-flex justify-content-evenly p-3">
                <button class="btn purple text-light fs-5">Favorite This Mod <i
                        class="mdi mdi-account-star-outline fs-3"></i></button>
                <p class="fs-2">Favorites: 0 <i class="mdi mdi-star"></i></p>
            </div>

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

.modImg {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
}

.purple {
    background-color: purple;
}
</style>