import { CategoresRepository } from "../repositories/implements/CategoriesRepositories";
import { ICategoryRepositories } from "../repositories/ICategoryRepositories";


interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService{
    constructor(private categoresRepository: ICategoryRepositories ){}
    execute({name,description}:IRequest){
        const categoryIsExists = this.categoresRepository.findByName(name) 
        if(categoryIsExists){
            throw new Error("Category Already exists")
        }
    
        this.categoresRepository.create({name,description})
    }
}

export {CreateCategoryService}