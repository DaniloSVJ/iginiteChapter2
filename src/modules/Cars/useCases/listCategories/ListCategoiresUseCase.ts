import { Category } from "../../entities/Category";
import { ICategoryRepositories } from "../../repositories/ICategoryRepositories";



class ListCategoriesUseCase{
    constructor(private categoriesRepository: ICategoryRepositories){}
    async execute():Promise<Category[]>{
        
        const categories = await this.categoriesRepository.list()

        return categories
    }
}

export {ListCategoriesUseCase}