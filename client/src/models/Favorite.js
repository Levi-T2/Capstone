export class Favorite {
    constructor(data){
       this.car = data.car ? data.car : null
       this.carId = data.carId
       this.id = data.id
       this.accountId = data.accountId
       this.account = data.account
    }
}
