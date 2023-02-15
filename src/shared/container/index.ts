import { container } from "tsyringe"

import {ICategoryRepositories} from "../../modules/Cars/repositories/ICategoryRepositories"
import {CategoresRepository} from "../../modules/Cars/repositories/implements/CategoriesRepositories"

container.registerSingleton<ICategoryRepositories>(
    "CategoresRepository",
    CategoresRepository
)


