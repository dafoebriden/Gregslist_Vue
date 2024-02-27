import { AppState } from "../AppState";
import { House } from "../models/House";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('GOT HOUSES', response.data)
        const newHouses = response.data.map(housePOJO => new House(housePOJO))
        AppState.houses = newHouses
    }

    async getHouseById(houseId) {
        const response = await api.get(`api/houses/${houseId}`)
        logger.log('GOT HOUSE BY ID', response.data)
        const newHouse = new House(response.data)
        AppState.activeHouse = newHouse
    }
    clearAppState() {
        AppState.activeHouse = null
    }
    async destroyHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        logger.log('DESTROYED HOUSE', response.data)
        this.clearAppState()
    }
    async createHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        logger.log('CREATED HOUSE', response.data)
        const newHouse = new House(response.data)
        AppState.houses.push(newHouse)
    }
}

export const housesService = new HousesService()