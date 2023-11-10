<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-3">
                <p class="fs-3 bg-dark fw-bold rounded mb-0 p-1">Mod List</p>
            </div>
        </section>
        <section v-if="mods" class="row">
            <div v-for="mod in mods" :key="mod.id" class="col-12 col-md-6 p-2">
                <div class="bg-dark rounded p-2">
                    <img :src="mod.imgUrl" alt="">
                    <p>{{ mod.name }}</p>
                    <p>{{ mod.description }}</p>
                    <p>Mod Type: {{ mod.modType }}</p>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';


export default {
    setup() {
        const route = useRoute()

        onMounted(() => {
            getModsByCarId()
        })
        async function getModsByCarId() {
            try {
                const carId = route.params.carId
                await carService.getModificationsByCarId(carId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            mods: computed(() => AppState.activeModList)
        }
    }
};
</script>


<style lang="scss" scoped></style>