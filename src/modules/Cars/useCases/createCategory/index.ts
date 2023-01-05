import { CategoresRepository } from "../../repositories/implements/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoresRepository =  CategoresRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoresRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {createCategoryController,createCategoryUseCase}