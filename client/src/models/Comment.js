



    export class Comment{
        constructor(data){
            this.id = data.id
            this.creator = data.profile
            this.accountId = data.accountId
            this.carId = data.carId
            this.body = data.body 

        }
    }