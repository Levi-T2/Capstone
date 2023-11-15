<template>
    <div class="transparent-bg p-3 text-center rounded">
        <h3 class="text-light p-1 style-border"></h3>
        <div>
            <img :src="compareCar.imgUrl" class="car-img">
        </div>
        <div class="text-light my-2">
            <p class="mb-0 fs-4">
                {{ compareCar.year }} {{ compareCar.make }} {{ compareCar.model }}
            </p>
        </div>
        <div class="text-light my-2">
            <p class="mb-0">Engine: {{ compareCar.displacement }} {{ compareCar.engine }}</p>
            <p>{{ compareCar.horsepower }} Horsepower</p>
            <p>FuelType: {{ compareCar.fuelType }}</p>
            <p>MPG: {{ compareCar.mpg }}</p>
            <p>{{ compareCar.drivetrain }}</p>
            <p>{{ compareCar.weight }} Lbs.</p>
            <p>Seating Capacity: {{ compareCar.seatCapacity }}</p>
        </div>
    </div>
</template>


<script>
import { Car } from '../models/Car';
export default {
    props: {
        compareCar: { type: Car, required: true }
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