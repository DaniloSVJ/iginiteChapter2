import {SpecificationRepository} from "../../repositories/implements/SpecificationRepository"
import { CreateSpecificationController } from "./CreateSpecificationController"
import { CreateSpeciticationUseCase } from "./CreateSpeciticationUseCase"

const specificationRepositories = new SpecificationRepository()

const createSpecificationUseCase = new CreateSpeciticationUseCase(specificationRepositories)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)


export {createSpecificationController}