<template>
    <div class="modal fade" id="ComparisonModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content form-bg form-border">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-light fw-bold" id="exampleModalLabel">Comparison Table</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-light">
                    <div id="compareYear">
                        <div v-if="compareCar.year > compareCar2.year && compareCar.year > compareCar3.year"
                            :title="compareCar.year">
                            <p>Newest Year: {{ compareCar.make }} {{ compareCar.model }}</p>
                        </div>
                        <div v-else-if="compareCar2.year > compareCar.year && compareCar2.year > compareCar3.year"
                            :title="compareCar2.year">
                            <p>Newest Year: {{ compareCar2.make }} {{ compareCar2.model }}</p>
                        </div>
                        <div v-else-if="compareCar3.year > compareCar.year && compareCar3.year > compareCar2.year"
                            :title="compareCar3.year">
                            <p>Newest Year: {{ compareCar3.make }} {{ compareCar3.model }}</p>
                        </div>
                    </div>
                    <div id="compareHorsepower">
                        <div v-if="compareCar.horsepower > compareCar2.horsepower &&
                            compareCar.horsepower > compareCar3.horsepower" :title="compareCar.horsepower">
                            <p>Highest Horsepower: {{ compareCar.make }} {{ compareCar.model }}</p>
                        </div>
                        <div v-if="compareCar2.horsepower > compareCar.horsepower &&
                            compareCar2.horsepower > compareCar3.horsepower" :title="compareCar2.horsepower">
                            <p>Highest Horsepower: {{ compareCar2.make }} {{ compareCar2.model }}</p>
                        </div>
                        <div v-if="compareCar3.horsepower > compareCar.horsepower &&
                            compareCar3.horsepower > compareCar2.horsepower" :title="compareCar3.horsepower">
                            <p>Highest Horsepower: {{ compareCar3.make }} {{ compareCar3.model }}</p>
                        </div>
                    </div>
                    <div id="compareWeight">
                        <div v-if="compareCar.weight < compareCar2.weight && compareCar.weight < compareCar3.weight"
                            :title="compareCar.weight">
                            <p>Lowest Weight: {{ compareCar.make }} {{ compareCar.model }}</p>
                        </div>
                        <div v-if="compareCar2.weight < compareCar.weight && compareCar2.weight < compareCar3.weight"
                            :title="compareCar2.weight">
                            <p>Lowest Weight: {{ compareCar2.make }} {{ compareCar2.model }}</p>
                        </div>
                        <div v-if="compareCar3.weight < compareCar.weight && compareCar3.weight < compareCar2.weight"
                            :title="compareCar3.weight">
                            <p>Lowest Weight: {{ compareCar3.make }} {{ compareCar3.model }}</p>
                        </div>
                    </div>
                    <div id="compareMPG">
                        <div v-if="compareCar.mpg > compareCar2.mpg && compareCar.mpg > compareCar3.mpg"
                            :title="compareCar.mpg">
                            <p>Highest MPG: {{ compareCar.make }} {{ compareCar.model }}</p>
                        </div>
                        <div v-if="compareCar2.mpg > compareCar.mpg && compareCar2.mpg > compareCar3.mpg"
                            :title="compareCar2.mpg">
                            <p>Highest MPG: {{ compareCar2.make }} {{ compareCar2.model }}</p>
                        </div>
                        <div v-if="compareCar3.mpg > compareCar.mpg && compareCar3.mpg > compareCar2.mpg"
                            :title="compareCar3.mpg">
                            <p>Highest MPG: {{ compareCar3.make }} {{ compareCar3.model }}</p>
                        </div>
                    </div>
                    <div id="compareCapacity">
                        <div v-if="compareCar.seatCapacity > compareCar2.seatCapacity &&
                            compareCar.seatCapacity > compareCar3.seatCapacity" :title="compareCar.seatCapacity">
                            <p>More Seating: {{ compareCar.make }} {{ compareCar.model }}</p>
                        </div>
                        <div v-if="compareCar2.seatCapacity > compareCar.seatCapacity &&
                            compareCar2.seatCapacity > compareCar3.seatCapacity" :title="compareCar2.seatCapacity">
                            <p>More Seating: {{ compareCar2.make }} {{ compareCar2.model }}</p>
                        </div>
                        <div v-if="compareCar3.seatCapacity > compareCar.seatCapacity &&
                            compareCar3.seatCapacity > compareCar2.seatCapacity" :title="compareCar3.seatCapacity">
                            <p>More Seating: {{ compareCar3.make }} {{ compareCar3.model }}</p>
                        </div>
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


<style lang="scss" scoped>
.form-bg {
    background-color: rgba(0, 0, 128, 0.705);
}

.form-border {
    border: 5px solid blue;
}
</style>