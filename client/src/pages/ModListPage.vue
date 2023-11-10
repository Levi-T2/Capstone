<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-3">
                <p class="fs-3 bg-dark fw-bold rounded mb-0 p-1">Mod List</p>
            </div>
        </section>
        <section v-if="mods" class="row">
            <div v-for="mod in mods" :key="mod.id" class="col-12 col-md-6 p-2">
               <ModsComponent :mod="mod"></ModsComponent>
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
import ModsComponent from '../components/ModsComponent.vue';


export default {
    setup() {
        const route = useRoute();
        onMounted(() => {
            getModsByCarId();
        });
        async function getModsByCarId() {
            try {
                const carId = route.params.carId;
                await carService.getModificationsByCarId(carId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            mods: computed(() => AppState.activeModList)
        };
    },
    components: { ModsComponent }
};
</script>


<style lang="scss" scoped>

</style>