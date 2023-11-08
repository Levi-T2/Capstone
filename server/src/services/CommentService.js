import { dbContext } from "../db/DbContext.js"
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

}

export const commentService = new CommentService()