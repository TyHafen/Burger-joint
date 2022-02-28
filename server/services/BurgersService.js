import { dbContext } from "../db/DbContext";
import { logger } from "../utils/Logger";

class BurgersService {
    removeBurger(burgerId) {
        logger.log(typeof burgerId)
        const index = dbContext.Burgers.findIndex(b => b.id.toString() === burgerId)
        if (index === -1) {
            throw new Error('no burger dog');

        }
        dbContext.Burgers.splice(index, 1)
        return 'she gone'
    }
    async createBurger(body) {
        const burger = await dbContext.Burgers.push(body)
        return body
    }
    async getAllBurgers() {
        const burgers = await dbContext.Burgers
        return burgers
    }




}



export const burgersService = new BurgersService()