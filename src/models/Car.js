export class Car {
  constructor (data) {
    this.id = data.id || data._id
    this.creatorId = data.creatorId
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.engineType = data.engineType
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }
}

const carData = {
  "_id": "6462ed1266d4560e6cfa0f39",
  "make": "Honda",
  "model": "Accord",
  "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
  "year": 2022,
  "price": 1500,
  "description": "zoom zoom",
  "engineType": "unknown",
  "creatorId": "63f7d6202d1cf882287f12e2",
  "createdAt": "2023-05-16T02:40:18.318Z",
  "updatedAt": "2023-05-16T02:40:18.318Z",
  "__v": 0,
  "creator": {
    "_id": "63f7d6202d1cf882287f12e2",
    "name": "Charles Francis Xavier",
    "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
    "id": "63f7d6202d1cf882287f12e2"
  },
  "id": "6462ed1266d4560e6cfa0f39"
}