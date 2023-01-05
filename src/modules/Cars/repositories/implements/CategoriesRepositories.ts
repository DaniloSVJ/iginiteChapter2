import {Category} from '../../model/Category'
import { ICategoryRepositories,ICreateCategoryDTO } from '../ICategoryRepositories';

class CategoresRepository implements ICategoryRepositories{
    private categories: Category[]
    private static INSTANCE: CategoresRepository
    constructor(){
        this.categories=[]
    }
   
    public static getInstance():CategoresRepository{
        if(!CategoresRepository.INSTANCE){
            CategoresRepository.INSTANCE = new CategoresRepository()
        }

        return CategoresRepository.INSTANCE
    }
    create({name,description}:ICreateCategoryDTO):void{
        const category = new Category()
        //Object.assign ele atribui cada um dos items ao objeto
        Object.assign(category,{
            name,
            description,
            created_at: new Date()
        })
        this.categories.push(category)
    }

    list():Category[]{
        return this.categories;
    }
    
    findByName(name:string):Category{
        const category = this.categories.find(category=>category.name===name)

        return category
    }
}

export {CategoresRepository}