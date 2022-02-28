import { dbContext } from "../db/DbContext";
import { logger } from "../utils/Logger";

class BurgersService {
    async getAllBurgers() {
        const burgers = await dbContext.Burgers
        return burgers
    }




}



export const burgersService = new BurgersService()