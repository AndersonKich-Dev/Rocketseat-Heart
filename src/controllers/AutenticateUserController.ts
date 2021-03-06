import { Request, Response} from 'express'
import { AutenticateUserService } from '../services/AutenticateUserService'



class AutenticateUserController {
    async handle(request: Request, response: Response) {

        const { code } = request.body;

        const service = new AutenticateUserService();
        
        try {
            const result = await service.execute(code);
            return response.json(result);
        }
        catch(err){
            return response.json(err.message);
        }
    }
}


export { AutenticateUserController }