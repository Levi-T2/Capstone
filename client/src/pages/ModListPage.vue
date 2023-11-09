<template>
    <div class="component">


    </div>
</template>


<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { useRoute } from 'vue-router';


export default {
    setup(){
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
    return {  }
    }
};
</script>


<style lang="scss" scoped>

</style>