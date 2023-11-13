<template>
    <div class="transparent-bg p-3 text-center rounded">
        <h2 class="text-light style-border p-1">Comparison Table</h2>
        <div id="compareYear">
            <div v-if="compareCar.year > compareCar2.year">
                <p :title="compareCar.year" class="text-light">Newer year: {{ compareCar.make
                }} {{ compareCar.model }}</p>
            </div>
            <div v-else>
                <p :title="compareCar2.year" class="text-light">Newer year: {{ compareCar2.make }} {{
                    compareCar2.model }}</p>
            </div>
        </div>
        <div id="compareHorsepower">
            <div v-if="compareCar.horsepower > compareCar2.horsepower">
                <p :title="compareCar.horsepower" class="text-light">Higher Horsepower: {{ compareCar.make
                }}
                    {{ compareCar.model }}</p>
            </div>
            <div v-else>
                <p :title="compareCar2.horsepower" class="text-light">Higher Horsepower: {{ compareCar2.make
                }}
                    {{ compareCar2.model }}</p>
            </div>
        </div>
        <div id="compareWeight">
            <div v-if="compareCar.weight < compareCar2.weight">
                <p :title="compareCar.weight" class="text-light">Lower Weight: {{ compareCar.make }} {{
                    compareCar.model }}</p>
            </div>
            <div v-else>
                <p :title="compareCar2.weight" class="text-light">Lower Weight {{ compareCar2.make }} {{
                    compareCar2.model }}</p>
            </div>
        </div>
        <div id="compareMPG">
            <div v-if="compareCar.mpg > compareCar2.mpg">
                <p :title="compareCar.mpg" class="text-light">Better Mpg: {{ compareCar.make }} {{
                    compareCar.model }}</p>
            </div>
            <div v-else>
                <p :title="compareCar2.mpg" class="text-light">Better Mpg: {{ compareCar2.make }} {{
                    compareCar2.model }}</p>
            </div>
        </div>
        <div id="compareCapacity">
            <div v-if="compareCar.seatCapacity > compareCar2.seatCapacity">
                <p :title="compareCar.seatCapacity" class="text-light">More Seating: {{ compareCar.make }}
                    {{ compareCar.model }}</p>
            </div>
            <div v-else>
                <p :title="compareCar2.seatCapacity" class="text-light">More Seating: {{ compareCar2.make }}
                    {{ compareCar2.model }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { Car } from '../models/Car';


export default {
    props: {
        compareCar: { type: Car, required: true },
        compareCar2: { type: Car, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>