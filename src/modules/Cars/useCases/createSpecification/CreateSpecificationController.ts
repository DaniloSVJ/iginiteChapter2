import {CreateSpeciticationUseCase} from './CreateSpeciticationUseCase'
import { Request,Response } from 'express'

class CreateSpecificationController{
    constructor(private createSpecificationUseCase: CreateSpeciticationUseCase){}
    handle(request:Request,response:Response):Response{
        const {name,description} = request.body
       
        this.createSpecificationUseCase.execute({name,description})
        
        return response.status(201).send()
    }

}

export {CreateSpecificationController}