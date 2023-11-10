<template>
   <div class="mod-style text-light p-3 text-end">
    <h3>Modification</h3>
    <div class="text-start">
        <p>{{ mod.name }}</p>
        <p>{{ mod.description }}</p>
        <p>{{ mod.modType }} Mod Type</p>
    </div>
    <div>
        <img src="https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png" title="Mod Image" class="img-fluid rounded"> 
    </div>
</div>
</template>


<script>
import { Modification } from '../models/Modification';


export default {
    props: {
        mod: { type: Modification, required: true }
    },
    setup(){
    return {  }
    }
};
</script>


<style lang="scss" scoped>

.mod-style {
  background-color: rgba(0, 0, 0, 0.278);
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px rgba(245, 245, 245, 0.688);

}

</style>