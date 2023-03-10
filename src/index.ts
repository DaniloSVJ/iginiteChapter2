import "reflect-metadata";
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from "./swagger.json"

import { router } from './routes'


import "./database"
import "./shared/container"

const app = express()
app.use(express.json())

app.use("/api-doc",swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(3333)

