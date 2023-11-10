import { AppState } from "../AppState";
import { Comment } from "../models/Comment";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";





    class CommentService{

        async getComments() {
            const res = await api.get('api/comments')
            logger.log(res.data)
            const newComments = res.data.map(commentPOJO => new Comment(commentPOJO))
            AppState.comments = newComments
        }
        
        async createComment(commentData) {
            const carId = AppState.activeCar.id
            commentData.carId = carId;
            const res = await api.post('api/comments', commentData)
            logger.log(res.data)
            const newComment = new Comment(res.data)
            AppState.comments.push(newComment)
        }

        async deleteComment(commentId) {
            const res = await api.delete(`api/comments/${commentId}`)
            logger.log(res.data)
            const commentIndex = AppState.comments.findIndex(comment => comment.id == commentId)
            if (commentIndex == -1) {
                return
            }
            AppState.comments.splice(commentIndex, 1)
        }

        async getCommentsByCarId(carId) {
            const res = await api.get(`api/cars/${carId}/comments`)
            logger.log(res.data)
            AppState.comments = res.data.map((comment) => new Comment(comment))
        }

    }

export const commentService = new CommentService();