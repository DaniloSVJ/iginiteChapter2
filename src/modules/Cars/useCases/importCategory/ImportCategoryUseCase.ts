import fs from 'fs'
import  {parse} from 'csv-parse'
import { ICategoryRepositories } from '../../repositories/ICategoryRepositories'
//var parse = require('csv-parse');

interface IImportCategory{
    name:string
    description:string
}

class ImportCategoryUseCase{
    constructor(private categoriesRepository: ICategoryRepositories){}

    loadCategories(file:Express.Multer.File):Promise<IImportCategory[]>{
        return new Promise((resolve,reject)=>{

            const stream = fs.createReadStream(file.path)
            const parseFile = parse({delimiter: ','})
            const categories: IImportCategory[]=[]
            stream.pipe(parseFile) //pipe serve para pega cada parte do arquivo lido, seja determinado para onde quer enviar
            parseFile.on("data",async function(line){
                
                const [name,description] = line
                categories.push({
                    name,
                    description
                })
            })
            .on("end",()=>{
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error",(err)=>{
                reject(err)
            })
        })
        
    }

    async execute(file:Express.Multer.File):Promise<void>{
      console.log(file)
       const categories = await this.loadCategories(file);
       categories.map(async category=>{
           const {name,description} = category;
           const existCategory = this.categoriesRepository.findByName(name);
           if(!existCategory){
                this.categoriesRepository.create({
                    name,
                    description
                })    
           }

       })
    }
}


export {ImportCategoryUseCase}

