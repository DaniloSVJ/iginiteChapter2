import {ImportCategoryController} from "./ImportCategoryController"
import {ImportCategoryUseCase} from "./ImportCategoryUseCase"
import { CategoresRepository } from "../../repositories/implements/CategoriesRepositories";

const categoresRepository = CategoresRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoresRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController}