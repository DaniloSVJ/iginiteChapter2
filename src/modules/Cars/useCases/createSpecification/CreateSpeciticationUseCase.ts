import { ISpecificationRepositories } from "../../repositories/ISpecificationsRepositories"
interface IRequest{
    name:string
    description: string
}
class CreateSpeciticationUseCase{
    constructor(private specificationRepository: ISpecificationRepositories ){}

    execute({name,description}:IRequest):void{
        this.specificationRepository.create({
            name,
            description
        })
    }
}

export {CreateSpeciticationUseCase}