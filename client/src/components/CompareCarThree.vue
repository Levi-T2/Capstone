<template>
    <div class="transparent-bg p-3 text-center rounded">
        <h3 class="text-light p-1 style-border">Car 3</h3>
        <div>
            <img :src="compareCar3.imgUrl" class="car-img">
        </div>
        <div class="text-light my-2">
            <p class="mb-0 fs-4">
                {{ compareCar3.year }} {{ compareCar3.make }} {{ compareCar3.model }}
            </p>
        </div>
        <div class="text-light my-2">
            <p class="mb-0">Engine: {{ compareCar3.displacement }} {{ compareCar3.engine }}</p>
            <p>{{ compareCar3.horsepower }} Horsepower</p>
            <p>FuelType: {{ compareCar3.fuelType }}</p>
            <p>MPG: {{ compareCar3.mpg }}</p>
            <p>{{ compareCar3.drivetrain }}</p>
            <p>{{ compareCar3.weight }} Lbs.</p>
            <p>Seating Capacity: {{ compareCar3.seatCapacity }}</p>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
export default {
    props: {
        compareCar3: { type: Car, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.car-img {
    height: 14rem;
    max-width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
}

.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.style-border {
    border-bottom: 3px solid whitesmoke;
}
</style>