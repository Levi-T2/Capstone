<template>

        <div>
            <p>{{ carProp }}</p>
        </div>
    
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
export default {
props: {carProp: {type: Car, required: true}},

    setup(){


    return { 

     }
    }
};
</script>


<style lang="scss" scoped>

</style>