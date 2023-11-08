import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { carsService } from "../services/CarsService.js";
import { commentService } from "../services/CommentService.js";

export class CommentController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get('', this.getAllComments)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createComment)

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
}