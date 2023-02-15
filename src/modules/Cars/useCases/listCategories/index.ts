import { CategoresRepository } from "../../repositories/implements/CategoriesRepositories";
import { ListCategoriesUseCase } from "./ListCategoiresUseCase";
import { ListCategoriesController } from "./ListCategoriesControllers";

const categoresRepository = null
const listCategoriesUseCase = new ListCategoriesUseCase(categoresRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export {listCategoriesController}