export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms | 0
        this.bathrooms = data.bathrooms | 0
        this.levels = data.levels | 1
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price | 0
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creatorName = data.creator.name
        this.creatorPicture = data.creator.picture

        this.address = data.address
    }
}

const HouseData = {
    "_id": "645d60f381faf24223ae886b",
    "bedrooms": 3,
    "bathrooms": 2,
    "levels": 2,
    "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
    "year": 2003,
    "price": 230000,
    "description": "Super sick house",
    "creatorId": "63f7d6202d1cf882287f12e2",
    "createdAt": "2023-05-11T21:41:07.979Z",
    "updatedAt": "2023-05-11T21:41:07.979Z",
    "__v": 0,
    "creator": {
        "_id": "63f7d6202d1cf882287f12e2",
        "name": "Charles Francis Xavier",
        "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
        "id": "63f7d6202d1cf882287f12e2"
    },
    "id": "645d60f381faf24223ae886b"
}