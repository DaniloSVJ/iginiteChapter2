import fs from 'fs'
import  {parse} from 'csv-parse'
import { ICategoryRepositories } from '../../repositories/ICategoryRepositories'

interface IImportCategory{
    name:string
    description:string
}

class ImportCategoryUseCase{
    constructor(private categoriesRepository: ICategoryRepositories){}

    loadCategories(file:Express.Multer.File):Promise<IImportCategory[]>{
        return new Promise((resolve,reject)=>{

            const stream = fs.createReadStream(file.path)
            const parseFile = parse()
            const categories: IImportCategory[]=[]
            stream.pipe(parseFile) //pipe serve para pega cada parte do arquivo lido, seja determinado para onde quer enviar
            parseFile.on("data",async (line)=>{
                const [name,description] = line
                categories.push({
                    name,
                    description
                })
            })
            .on("end",()=>{
                resolve(categories)
            })
            .on("error",(err)=>{
                reject(err)
            })
           
        })
        
    }
    async execute(file:Express.Multer.File):Promise<void>{
       const categories = await this.loadCategories(file)
    }
}


export {ImportCategoryUseCase}

