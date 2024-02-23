import { dbContext } from "../db/DbContext"

class GalaxiesService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find().populate('creator', 'name')
        return galaxies
    }

    async createGalaxy(galaxyData) {
        const newGalaxy = await dbContext.Galaxy.create(galaxyData)
        return newGalaxy
    }
}

export const galaxiesService = new GalaxiesService()