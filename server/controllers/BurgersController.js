import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";



export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getAllBurgers)
    }

    async getAllBurgers(req, res, next) {
        try {
            const burgers = await burgersService.getAllBurgers()
            return res.send(burgers)
        } catch (error) {
            next(error)
        }



    }




}


