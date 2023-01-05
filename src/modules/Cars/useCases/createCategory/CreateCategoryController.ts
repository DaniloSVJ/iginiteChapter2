import {Request,Response} from "express"
import { CategoresRepository } from "../../repositories/implements/CategoriesRepositories"
import { CreateCategoryService } from "../../services/CreateCategoryService"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
class CreateCategoryController{
    
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}
    handle(request:Request,response:Response):Response{
        const {name,description} = request.body
        
        this.createCategoryUseCase.execute({name,description})
        return response.status(201).send()
    }
}

export {CreateCategoryController}