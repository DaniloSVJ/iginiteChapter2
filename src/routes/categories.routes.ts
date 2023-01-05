import {Request,Response, Router} from 'express'
import { Category } from '../modules/Cars/model/Category'
import { CategoresRepository } from '../modules/Cars/repositories/implements/CategoriesRepositories'
import { createCategoryController } from '../modules/Cars/useCases/createCategory'
import { listCategoriesController } from '../modules/Cars/useCases/listCategories'
import { importCategoryController } from '../modules/Cars/useCases/importCategory'

import multer from 'multer'
const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp"
})
categoriesRoutes.post("/",(request:Request,response:Response)=>{
   return createCategoryController.handle(request,response)
})

categoriesRoutes.get("/",(request:Request,response:Response)=>{
    return listCategoriesController.handle(request,response)
})
categoriesRoutes.post('/import',upload.single('file'),(request,response)=>{
   return importCategoryController.handle(request,response)
})

export {categoriesRoutes}