import dotenv from 'dotenv'
import express from 'express'
dotenv.config()


export const app = express()

app.use(express.json())

//Routes
//autenticacion
//user