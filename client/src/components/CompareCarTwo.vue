<template>
    <div class="transparent-bg p-3 text-center rounded">
        <h3 class="text-light p-1 style-border">Car 2</h3>
        <div>
            <img :src="compareCar2.imgUrl" class="car-img">
        </div>
        <div class="text-light my-2">
            <p class="mb-0 fs-4">
                {{ compareCar2.year }} {{ compareCar2.make }} {{ compareCar2.model }}
            </p>
        </div>
        <div class="text-light my-2">
            <p class="mb-0">Engine: {{ compareCar2.displacement }} {{ compareCar2.engine }}</p>
            <p>{{ compareCar2.horsepower }} Horsepower</p>
            <p>FuelType: {{ compareCar2.fuelType }}</p>
            <p>MPG: {{ compareCar2.mpg }}</p>
            <p>{{ compareCar2.drivetrain }}</p>
            <p>{{ compareCar2.weight }} Lbs.</p>
            <p>Seating Capacity: {{ compareCar2.seatCapacity }}</p>
        </div>
    </div>
</template>


<script>
import { Car } from '../models/Car';

export default {
    props: {
        compareCar2: { type: Car, required: true }
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