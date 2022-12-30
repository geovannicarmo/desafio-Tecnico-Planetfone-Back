import express from "express";
import cors from "cors"
import dotenv from 'dotenv'
import router from './routes/indexRouter.js'

dotenv.config()

const PORT = process.env.PORT||5009;
const app= express()

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>console.log(`Server run in port ${PORT}`))