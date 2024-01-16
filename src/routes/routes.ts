import express, { Router } from 'express'

export const routes: Router = express.Router()

routes.get('/', (req, res) => {
  res.json('Hello world')
})
