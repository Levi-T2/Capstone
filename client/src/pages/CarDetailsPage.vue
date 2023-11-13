<template>
    <div class="container-fluid">
        <section v-if="cars" class="row">
            <div class="col-12 p-5 text-white">
                <div class="row transparent-bg rounded p-3 box-shadow">
                    <div class="col-12 col-md-6">
                        <div>
                            <img class="rounded car-picture" :src="cars.imgUrl" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="fw-bold fs-5 d-flex justify-content-between">
                            <div class="display-5 underline">
                                {{ cars.year }}
                                {{ cars.make }}
                                {{ cars.model }}
                            </div>
                            <div v-if="cars.creator">
                                <div v-if="cars.creator.id == account.id" class="dropdown" title="dropdown menu">
                                    <a class="rounded-pill toggle-start text-light" role="button" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i
                                            class="mdi mdi-circle"></i>
                                    </a>
                                    <ul class="dropdown-menu text-center">
                                        <button data-bs-toggle="modal" data-bs-target="#ModModalForm"
                                            class="btn btn-success my-1">Post Mod</button>
                                        <button @click="deleteCar(cars.id)" class="btn btn-danger my-1">Delete Car</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="display-5 p-4 fs-5">
                            {{ cars.description }}
                        </div>
                    </div>
                    <div class="row align-items-center">

                        <div class="col-12 fs-4 display-5 col-md-4 d-flex flex-column text-center mt-5">
                            <p class="underline fs-2 py-2">Mechanical</p>
                            <p>Engine Type: {{ cars.engine }}</p>
                            <p>Horsepower: {{ cars.horsepower }}</p>
                            <p>Fuel Type: {{ cars.fuelType }}</p>
                            <p>Drivetrain: {{ cars.drivetrain }}</p>
                        </div>
                        <div class="col-12 fs-3 display-5 col-md-4 d-flex flex-column  text-center mt-5">
                            <p class="underline py-2 fs-2">Body</p>
                            <p>Weight Capacity: {{ cars.weight }}</p>
                            <p>Seat Capacity: {{ cars.seatCapacity }}</p>
                            <p>Body-type: {{ cars.bodyType }}</p>
                            <p>MPG: {{ cars.mpg }}</p>
                        </div>
                        <div class="col-12 col-md-4 mt-4">

                            <div class="d-flex text-center justify-content-end">

                                <RouterLink :to="{ name: 'ModList', params: { carId: cars.id } }">
                                    <div class=" fw-bold">
                                        <button class="btn btn-success mx-3 fw-bold mb-3">Mod List <i
                                                class="mdi mdi-cog"></i></button>
                                        <p class="text-light underline">Mods Done:</p>
                                    </div>
                                </RouterLink>
                                <div class=" fw-bold">
                                    <button class="btn btn-primary mx-3 fw-bold mb-3">Like Car <i
                                            class="mdi mdi-heart"></i></button>
                                    <p class="underline">Likes:</p>
                                </div>

                            </div>
                            <div class="d-flex justify-content-end align-items-center fw-bold mx-2">
                                <p class="p-2 text-center underline">Created By: {{ cars?.creator?.name }}</p>
                                <img class="rounded-circle profile-pic mt-4" :src="cars?.creator?.picture"
                                    :alt="cars?.creator?.name">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="row justify-content-center ">

            <div class=" col-8 transparent-bg text-center box-shadow my-5">
                <h1 class="col-12 text-light text-center">Reviews <i class="mdi mdi-comment fs-2"></i></h1>

                <button v-if="account.id" type="button" title="Open Post Form" data-bs-toggle="modal"
                    data-bs-target="#commentModal" class=" col-5 m-5 btn box-shadow transparent-bg  fs-4 text-light">Post
                    Review</button>

            </div>
        </div>

        <div class="row justify-content-center">
            <div v-for="comment in comments" :key="comment.id" class="col-8 transparent-bg box-shadow m-3">
                <CommentComp :commentProp="comment" />

            </div>
        </div>

    </div>
    <ModFormModal />
    <CommentModal />
</template>


<script>
import { AppState } from '../AppState.js';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { carService } from '../services/CarService';
import { useRoute } from 'vue-router';
import ModFormModal from '../components/ModFormModal.vue';
import CommentComp from '../components/CommentComp.vue';
import CommentModal from '../components/CommentModal.vue';
import { commentService } from '../services/CommentService';
import { logger } from '../utils/Logger';
export default {
    setup() {
        const route = useRoute();
        onMounted(() => {
            getCarById();
            getCommentsByCarId();
        });

        async function getCommentsByCarId() {
            try {
                const carId = route.params.carId;
                await commentService.getCommentsByCarId(carId);
            }
            catch (error) {
                logger.error("Comment Id error", error);
                Pop.error("Comment Error", error.message);
            }
        }
        async function getCarById() {
            try {
                const carId = route.params.carId;
                await carService.getCarById(carId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            cars: computed(() => AppState.activeCar),
            account: computed(() => AppState.account),
            comments: computed(() => AppState.comments),
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
            }
        };
    },
    components: { ModFormModal, CommentComp, CommentModal }
};
</script>


<style lang="scss" scoped>
.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.profile-pic {
    object-fit: cover;
    object-position: center;
    height: 30%;
    width: 30%;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}

.toggle-start {
    font-size: 0.72rem;
}

.underline {
    text-decoration: underline 1px white;
}

.car-picture {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    object-position: center;
}
</style>