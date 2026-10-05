import express from 'express'
import cookieParser from 'cookie-parser';

import connectToDatabase from './database/mongodb.js'
import { PORT } from './config/env.js'

import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js';

const app = express();

app.use(express.json())
app.use(cookieParser())


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)


app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker API")
})

app.listen({port: PORT},   async() => {
    console.log(`Subscription API is on port http://localhost:${PORT}`)

    await connectToDatabase()
})

export default app;