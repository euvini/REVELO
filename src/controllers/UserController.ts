import { Request, response, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
    async create(req: Request, res: Response) {
        const { name, crm, telephone, cellphone, cep, specialty } = req.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
        cellphone,
        });
        
        if(userAlreadyExists) {
            return response.status(400).json({
                error: "Usuário já existe!",
            });
        }
 
        const user = usersRepository.create ({
            name, crm, telephone, cellphone, cep, specialty
        });
        await usersRepository.save(user);
        return res.json(user);
    }
}

export { UserController };
