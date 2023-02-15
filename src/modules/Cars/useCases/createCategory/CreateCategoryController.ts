import {Request,Response} from "express"
import { CategoresRepository } from "../../repositories/implements/CategoriesRepositories"
import { CreateCategoryService } from "../../services/CreateCategoryService"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import {container}  from "tsyringe"

class CreateCategoryController{
    
    async handle(request:Request,response:Response):Promise <Response>{
        const {name,description} = request.body
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase) 
        
        await createCategoryUseCase.execute({name,description})
        
        return response.status(201).send()
    }
}

export {CreateCategoryController}