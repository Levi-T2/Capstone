
export class Modification {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.modType = data.modType
        this.carId = data.carId
        this.creatorId = data.creatorId
        this.id = data.id
        this.creator = data.creator
        this.imgUrl = data.imgUrl
        this.favoriteCount = data.favoriteCount
    }
}