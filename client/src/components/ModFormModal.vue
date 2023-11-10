<template>
    <div class="modal fade" id="ModModalForm" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content formbg formbrdr">
                <div class="modal-header">
                    <h5 class="modal-title text-light" id="exampleModalLabel">Post Modification</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createMod">
                        <div class="mb-3 text-light">
                            <label for="modName" class="form-label">Modification Name</label>
                            <input v-model="editable.name" required type="text" class="form-control" id="modName">
                        </div>
                        <div class="mb-3 text-light">
                            <label for="modDesc" class="form-label">Modification Description</label>
                            <input v-model="editable.description" required type="text" class="form-control" id="modDesc">
                        </div>
                        <div class="mb-3 text-light">
                            <label for="modType" class="form-label">Mod Type</label>
                            <select v-model="editable.modType" required class="form-select" name="modType">
                                <option :value="modType" v-for="modType in modTypes" :key="modType">
                                    {{ modType }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3 p-2">
                            <label class="fs-5 p-2 text-light" for="imgUrl">Image</label>
                            <input class="form-control" type="file" accept="image/*,video/*,audio/*" name="fileInput"
                                required>
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
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { modificationService } from '../services/ModificationService';
import { Modal } from 'bootstrap';
import { logger } from '../utils/Logger';
import { useRoute } from 'vue-router'


export default {
    setup() {
        const editable = ref({})
        const modTypes = ['Engine', 'Utility', 'Interior', 'Cosmetic', 'Performance', 'Other']
        const route = useRoute()
        return {
            modTypes,
            editable,
            async createMod(event) {
                try {
                    logger.log(editable.value)
                    const file = event.target.fileInput.files[0]
                    const carId = route.params.carId
                    editable.value.carId = carId
                    const modData = editable.value
                    await modificationService.createMod(file, editable.value, modData)
                    editable.value = {}
                    event.target.reset()

                    Modal.getOrCreateInstance('#ModModalForm').hide()

                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }
            }
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