import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/cars', this.getMyCars)
      .get('/favorites', this.getMyFavorites)
      .put('', this.updateAccount)
  }
  async updateAccount(req, res, next) {
    try {
      const user = req.userInfo
      const accountData = req.body
      const updatedAccount = await accountService.updateAccount(user, accountData)
      return res.send(updatedAccount)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getMyCars(request, response, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getMyFavorites(request, response, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}
