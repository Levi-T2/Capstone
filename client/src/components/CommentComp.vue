<template>
    <div class="container-fluid">

        <section class="row">

            <div class="col-12">

                <section class="row justify-content-evenly align-items-center">

                    <div class="col-12 col-md-4">
                        <router-link :to="{ name: 'Profile', params: { profileId: commentProp.creator?.id } }">

                            <img class="img-fluid profile-pic rounded-circle text-center m-3"
                                :src="commentProp.creator.picture" alt="">

                        </router-link>

                    </div>

                    <div class="col-12 col-md-7 transparent-bg my-3 box-shadow ">

                        <p class=" underline text-light text-start fs-2">{{ commentProp.creator.name }}</p>
                        <p class="text-light fs-5">{{ commentProp.createdAt.toLocaleDateString() }}, at {{
                            commentProp.createdAt.toLocaleTimeString()
                        }}</p>
                        <p class=" text-light text-center fs-4">{{ commentProp.body }}</p>

                    </div>

                    <button v-if="account.id == commentProp.creator.id" @click="deleteComment()"
                        class=" box-shadow col-5 mt-5 mb-3 fs-4 btn btn-danger">Delete
                        Comment</button>
                </section>


            </div>

        </section>

    </div>
</template>
    
    
<script>
import { computed } from 'vue';
import { commentService } from '../services/CommentService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import { Comment } from '../models/Comment';

export default {
    props: { commentProp: { type: Comment, required: true } },


    setup(props) {

        return {
            account: computed(() => AppState.account),

            async deleteComment() {
                try {


                    const yes = await Pop.confirm('are you sure you want to delete?');

                    if (!yes) {
                        return;
                    }

                    const commentId = props.commentProp.id;
                    logger.log(commentId)
                    await commentService.deleteComment(commentId)


                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>
    
    
<style lang="scss" scoped>
.transparent-bg {
    background-color: rgba(0, 0, 0, 0.278);
}

.profile-pic {
    width: 95%;
    height: 30vh;
    object-position: center;
    object-fit: fill;
    box-shadow: 0px 5px 10px black;
}

.underline {
    text-decoration: underline 2px white;
}

.glow:hover {
    box-shadow: 0px 0px 15px #277cf1;
    transition: ease-in-out 0.3s;
}

.box-shadow {
    box-shadow: 0 5px 10px black;
}
</style>