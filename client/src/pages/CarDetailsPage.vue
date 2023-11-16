<template>
    <div class="container-fluid">
        <section v-if="cars" class="row">
            <div class="col-12 p-5 text-white">
                <div class="row transparent-bg rounded p-3 box-shadow">
                    <CarDetailsComp :cars="cars" :account="account" :favorites="favorites"></CarDetailsComp>
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
import CarDetailsComp from '../components/CarDetailsComp.vue';
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
            favorites: computed(() => AppState.activeFavorites),
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
    components: { ModFormModal, CommentComp, CommentModal, CarDetailsComp }
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