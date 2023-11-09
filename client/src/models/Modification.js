
export class Modification {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.modType = data.modType
        this.carId = data.carId
        this.creatorId = data.creatorId
    }
}