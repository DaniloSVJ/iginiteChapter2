import { inject, injectable } from "tsyringe"
import { ICategoryRepositories } from "../../repositories/ICategoryRepositories";

interface IRequest {
    name: string
    description: string
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoresRepository")
        private categoriesRepository: ICategoryRepositories) { }
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)
        if (categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }