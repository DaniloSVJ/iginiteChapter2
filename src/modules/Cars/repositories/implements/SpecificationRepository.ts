import { Specitication } from "../../model/Specitication";
import { ISpecificationRepositories,ICreateSpecificationsDTO } from "../ISpecificationsRepositories";

class SpecificationRepository implements ISpecificationRepositories{
    private specifications: Specitication[]
    constructor(){
        this.specifications =[]
    }
    create({name,description}:ICreateSpecificationsDTO):void{
        const  specification = new Specitication()
        
        Object.assign(specification,{
            name,
            description,
            created_at: new Date()
        })
        this.specifications.push(specification)
    }
    findByName(name: string): Specitication {
        const specification = this.specifications.find(
            (specification)=>specification.name===name
        )
        return specification

    }
    
}

export {SpecificationRepository}