<template>
   <div class="modal fade" id="ModModalForm" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content formbg formbrdr">
                <div class="modal-header">
                    <h5 class="modal-title text-light" id="exampleModalLabel">Post Modification</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="">
                        <div class="mb-3 text-light">
                            <label for="modName" class="form-label">Modification Name</label>
                            <input required type="text" class="form-control" id="modName">
                        </div>
                        <div class="mb-3 text-light">
                            <label for="modDesc" class="form-label">Modification Description</label>
                            <input required type="text" class="form-control" id="modDesc">
                        </div>
                        <div class="mb-3 text-light">
                            <label for="modType" class="form-label">Mod Type</label>
                            <select required class="form-select" name="modType">
                                <option :value="modType" v-for="modType in modTypes" :key="modType">
                                    {{ modType }}
                                </option>
                            </select>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-success rounded-pill" type="submit">Post Mod</button>
                        </div>
                    </form>
    </div>
    </div>
</div>
</div>
</template>


<script>

export default {
    setup(){
        const modTypes = ['Engine', 'Utility','Interior','Cosmetic','Performance','Other']
    return { 
        modTypes,
     }
    }
};
</script>


<style lang="scss" scoped>

.formbg {
    background-color: rgba(0, 0, 128, 0.705);
}

.formbrdr {
    border: 5px solid blue;
}
</style>