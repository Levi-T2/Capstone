import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { Car } from '../models/Car'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(accountData){
    const res = await api.put('account', accountData)
    logger.log(res.data)
    AppState.account = new Account(res.data)
  }

  async getCarsByAccount() {
    const res = await api.get(`/account/cars`)
    logger.log('got cars by id', res.data)
    AppState.cars = res.data.map((car) => new Car(car))
}
}

export const accountService = new AccountService()
