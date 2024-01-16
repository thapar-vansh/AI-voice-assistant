import express, { Application } from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { routes } from './routes/routes'
import { Logger } from './utils/logger'

export const app: Application = express()

configDotenv()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
const port = process.env.PORT

app.listen(port)
Logger.info(`Server listening on PORT : ${port}`)
