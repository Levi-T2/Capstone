import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { carsService } from "./CarsService.js"

class CommentService {
    getAllComments() {
        const comments = dbContext.Comments.find().populate('car')
        return comments
    }
    async getCommentsByCarId(carId) {
        const comments = await dbContext.Comments.find({ carId: carId }).populate('profile')
        return comments
    }
    async createComment(commentData) {
        const comment = await dbContext.Comments.create(commentData)
        await comment.populate('profile')
        await comment.populate('car')
        return comment
    }
    async destroyComment(commentId, userId) {
        const comment = await this.getCommentById(commentId)
        if (userId != comment.accountId.toString()) {
            throw new Forbidden(`You don't have permissions to delete this`)
        }
        await comment.remove()
        return `This has been deleted ${comment.id}`
    }
    async getCommentById(commentId) {
        const comment = await dbContext.Comments.findById(commentId)
        if (!commentId) {
            throw new BadRequest(`This is not a valid id: ${commentId}`)
        }
        return comment
    }

}

export const commentService = new CommentService()