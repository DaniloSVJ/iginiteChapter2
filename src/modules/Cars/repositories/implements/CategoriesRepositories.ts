import { getRepository, Repository } from 'typeorm';
import {Category} from '../../entities/Category'
import { ICategoryRepositories,ICreateCategoryDTO } from '../ICategoryRepositories';

class CategoresRepository implements ICategoryRepositories{
    private repository: Repository<Category>
   
    private static INSTANCE: CategoresRepository
    constructor(){
        this.repository = getRepository(Category)
       
    }
   
    // public static getInstance():CategoresRepository{
    //     if(!CategoresRepository.INSTANCE){
    //         CategoresRepository.INSTANCE = new CategoresRepository()
    //     }

    //     return CategoresRepository.INSTANCE
    // }
    async create({name,description}:ICreateCategoryDTO):Promise<void>{
        // const category = new Category()
        // //Object.assign ele atribui cada um dos items ao objeto
        // Object.assign(category,{
        //     name,
        //     description,
        //     created_at: new Date()
        // })
        const category = this.repository.create({
            name,
            description,
            
        })
        await this.repository.save(category)
        
    }

    async list():Promise<Category[]>{
        const categories = await this.repository.find()
        return categories;
    }
    
    async findByName(name:string):Promise<Category>{
        const category = await this.repository.findOne({name})

        return category
    }
}

export {CategoresRepository}