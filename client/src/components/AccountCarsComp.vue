<template>
    <!-- NOTE this html is very sensitive! So don't touch please. -->
    <div class="accordion" id="carAccordion"></div>
    <div class="accordion-item">
        <div class="accordion-header">
            <a class="text-center rounded display-card accordion-button mb-1 text-white px-2" role="button" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="true"
                title="See More Options" @click="pulseEffect()" id="pulse">
                <div class="car-display">
                    <img class="p-1 car-picture rounded" :src="accountProp.imgUrl" alt="Car Image">
                    <div class=" fs-6 fw-bold d-flex flex-row text-light px-4">
                        <p class="p-1 mb-0">{{ accountProp.year }}</p>
                        <p class="p-1 mb-0">{{ accountProp.make }}</p>
                        <p class="p-1 mb-0">{{ accountProp.model }}</p>
                    </div>
                </div>
            </a>
        </div>
        <div id="collapseOne" class="accordion-collapse collapse text-center" data-bs-parent="#carAccordion">
            <div class="accordion-body">
                <button data-bs-toggle="modal" data-bs-target="#ModModalForm" class="btn btn-success m-1 rounded-pill">Post
                    Mod</button>
                <RouterLink title="To Car Details" :to="{ name: 'CarDetails', params: { carId: accountProp.id } }">
                    <button class="btn btn-primary m-1 rounded-pill">See Car</button>
                </RouterLink>
                <button class="btn btn-info m-1 rounded-pill">Edit Car</button>
                <button @click="deleteCar(accountProp.id)" class="btn btn-danger m-1 rounded-pill">Delete Car</button>
            </div>
        </div>
    </div>
</template>

<!-- <div class="dropdown" title="dropdown menu">
    <a class="rounded-pill toggle-start text-light" role="button" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i>
    </a>
    <ul class="dropdown-menu text-center">
    </ul>
</div> -->

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Car } from '../models/Car';
import Pop from '../utils/Pop';
import { favoritesService } from '../services/FavoritesService.js'
import { RouterLink } from 'vue-router';
import { carService } from '../services/CarService';
export default {
    props: { accountProp: { type: Car, required: true } },
    setup() {
        return {
            async favoriteCar(carId) {
                try {
                    await favoritesService.favoriteCar(carId);
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async deleteCar(carId) {
                try {
                    const yes = await Pop.confirm(`Are you sure you want to delete this car?`);
                    if (!yes) {
                        return;
                    }
                    await carService.destroyCar(carId);
                }
                catch (error) {
                    Pop.error;
                }
            },
            pulseEffect() {
                // NOTE Works only if the user is very good
                let target = document.getElementById('pulse')

                target.classList.toggle("pulse")

            }
        };
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.car-picture {
    max-width: 25dvh;
    border-radius: 8%;
    object-fit: cover;
    object-position: center;
}

.transparent-bg {
    background-color: rgba(0, 0, 128, 0.477)
}

.profile-pic {
    width: 10%;
    height: 10%;
    object-position: center;
}

.toggle-start {
    font-size: 0.72rem;
}

.car-display {
    display: flex;
    align-items: center;
}

.dropdown-menu {
    background-color: rgba(0, 0, 128, 0.623);
    border-radius: 50px;
    --bs-dropdown-padding-y: 0.2rem;
    border: 1px solid whitesmoke;
}

.pulse,
.pulse:focus {
    animation: pulse 0.35s;
    box-shadow: 0 0 0 4em transparent;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 var(--bs-success);
    }
}

.display-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 768px) {
    .car-display {
        display: block;
    }

    .display-card {
        flex-direction: column;
        justify-content: center;
    }
}
</style>