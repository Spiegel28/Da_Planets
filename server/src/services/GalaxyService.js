import { dbContext } from "../db/DbContext"

class GalaxyService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxy.find().populate('creator', 'name')
        return galaxies
    }

    async createGalaxy(galaxyData) {
        const newGalaxy = await dbContext.Galaxy.create(galaxyData)
        return newGalaxy
    }
}

export const galaxyService = new GalaxyService()