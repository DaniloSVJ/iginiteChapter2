import {Request,Response, Router} from 'express'
import {CreateCategoryController} from "../modules/Cars/useCases/createCategory/CreateCategoryController"
import { listCategoriesController } from '../modules/Cars/useCases/listCategories'
import { importCategoryController } from '../modules/Cars/useCases/importCategory'

import multer from 'multer'
const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp"
})
const createCategoryController = new CreateCategoryController()
categoriesRoutes.post("/",createCategoryController.handle)

categoriesRoutes.get("/",(request:Request,response:Response)=>{
    return listCategoriesController.handle(request,response)
})
categoriesRoutes.post('/import',upload.single('file'),(request,response)=>{
   return importCategoryController.handle(request,response)
})

export {categoriesRoutes}