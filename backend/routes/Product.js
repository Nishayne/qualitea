import express from 'express'
import {ProductCreate, Update, Delete,GetProd} from '../controllers/Product.js'
const ProductRoutes=express.Router()
ProductRoutes.post("/create/:userId",ProductCreate)
ProductRoutes.put("/update/:id",Update)
ProductRoutes.delete("/delete/:id",Delete)
ProductRoutes.get("/getProds/:userId",GetProd)

export default ProductRoutes