<template>
    <div class="mod-style text-light p-3 text-end">
        <h3>{{ mod.name }}</h3>
        <div class="text-start">
            <p>{{ mod.description }}</p>
            <p>{{ mod.modType }} Mod Type</p>
        </div>
        <div>
            <img :src="mod.imgUrl" alt="">
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
</style>