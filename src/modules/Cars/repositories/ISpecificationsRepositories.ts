import { Specitication } from "../entities/Specitication";

interface ICreateSpecificationsDTO{
    name: string;
    description:string;
}

interface ISpecificationRepositories{
    create({name,description}:ICreateSpecificationsDTO):void
    findByName(name:string): Specitication
}

export {ISpecificationRepositories,ICreateSpecificationsDTO}