<template>
    <div class="transparent-bg p-3 text-center rounded">
        <h3 class="text-light p-1 style-border">Car 4</h3>
        <div>
            <img :src="compareCar4.imgUrl" class="car-img">
        </div>
        <div class="text-light my-2">
            <p class="mb-0 fs-4">
                {{ compareCar4.year }} {{ compareCar4.make }} {{ compareCar4.model }}
            </p>
        </div>
        <div class="text-light my-2">
            <p class="mb-0">Engine: {{ compareCar4.displacement }} {{ compareCar4.engine }}</p>
            <p>{{ compareCar4.horsepower }} Horsepower</p>
            <p>FuelType: {{ compareCar4.fuelType }}</p>
            <p>MPG: {{ compareCar4.mpg }}</p>
            <p>{{ compareCar4.drivetrain }}</p>
            <p>{{ compareCar4.weight }} Lbs.</p>
            <p>Seating Capacity: {{ compareCar4.seatCapacity }}</p>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
export default {
    props: {
        compareCar4: { type: Car, required: true }
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