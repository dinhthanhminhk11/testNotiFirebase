import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Pet from './router/pet'
const app = express()

app.use(express.json())
app.use(cors())
const server = app.listen(process.env.PORT, () => {
    console.log(`connected port ${process.env.PORT}`)
})

app.use('/api', Pet)