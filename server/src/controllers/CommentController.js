import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { carsService } from "../services/CarsService.js";
import { commentService } from "../services/CommentService.js";

export class CommentController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get('', this.getAllComments)
            .get('/:commentId', this.getCommentById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createComment)
            .delete('/:commentId', this.destroyComment)

    }
    async getAllComments(request, response, next) {
        try {
            const comments = await commentService.getAllComments()
            return response.send(comments)
        } catch (error) {
            next(error)
        }
    }
    async createComment(request, response, next) {
        try {
            const commentData = request.body
            const userId = request.userInfo.id
            commentData.accountId = userId
            const comment = await commentService.createComment(commentData)
            return response.send(comment)
        } catch (error) {
            next(error)
        }
    }
    async destroyComment(request, response, next) {
        try {
            const commentId = request.params.commentId
            const userId = request.userInfo.id
            const comment = await commentService.destroyComment(commentId, userId)
            return response.send(comment)
        } catch (error) {
            next(error)
        }
    }
    async getCommentById(request, response, next) {
        try {
            const commentId = request.params.commentId
            const comment = await commentService.getCommentById(commentId)
            return request.send(comment)
        } catch (error) {
            next(error)
        }
    }
}