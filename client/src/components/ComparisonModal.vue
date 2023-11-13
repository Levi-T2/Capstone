<template>
    <div class="modal fade" id="ComparisonModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Comparison Table</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="compareYear">
                        <div v-if="compareCar.year > compareCar2.year && compareCar.year > compareCar3.year"
                            :title="compareCar.make + compareCar.model">
                            <p>Newest Year: {{ compareCar.year }}</p>
                        </div>
                        <div v-else-if="compareCar2.year > compareCar.year && compareCar2.year > compareCar3.year"
                            :title="compareCar2.make + compareCar2.model">
                            <p>Newest Year: {{ compareCar2.year }}</p>
                        </div>
                        <div v-else-if="compareCar3.year > compareCar.year && compareCar3.year > compareCar2.year"
                            :title="compareCar3.make + compareCar3.model">
                            <p>Newest Year: {{ compareCar3.year }}</p>
                        </div>
                    </div>
                    <div id="compareHorsepower">
                        <div v-if="compareCar.horsepower > compareCar2.horsepower &&
                            compareCar.horsepower > compareCar3.horsepower"
                            :title="compareCar.make + compareCar.model">
                            <p>Highest Horsepower: {{ compareCar.horsepower }}</p>
                        </div>
                        <div v-if="compareCar2.horsepower > compareCar.horsepower &&
                            compareCar2.horsepower > compareCar3.horsepower"
                            :title="compareCar2.make + compareCar2.model">
                            <p>Highest Horsepower: {{ compareCar2.horsepower }}</p>
                        </div>
                        <div v-if="compareCar3.horsepower > compareCar.horsepower &&
                            compareCar3.horsepower > compareCar2.horsepower"
                            :title="compareCar3.make + compareCar3.model">
                            <p>Highest Horsepower: {{ compareCar3.horsepower }}</p>
                        </div>
                    </div>
                    <div id="compareWeight">

                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
export default {
    props: {
        compareCar: { type: Car, required: true },
        compareCar2: { type: Car, required: true },
        compareCar3: { type: Car, required: true },
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>