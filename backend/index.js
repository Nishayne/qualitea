import express from 'express'
import dotenv from 'dotenv'
import DbCon from './libs/db.js'
import AuthRoutes from './routes/Auth.js'
import ProductRoutes from './routes/Product.js'
import cors from 'cors'

dotenv.config()
const PORT= process.env.PORT || 4000
const app= express()
DbCon()
app.use(cors("*"))
app.use(express.json())
app.use('/auth',AuthRoutes)
app.use('/product',ProductRoutes)
app.get("/",(req,res)=>{
    res.send("Hello from Backend")
})

app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`)
})