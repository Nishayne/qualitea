import ProductModel from "../models/Product.js"
const ProductCreate=async(req,res)=>{
    try{
        const userId=req.params.userId
        const{title,desc,Image_url}=req.body
        if(!title || !desc || !Image_url || !userId){
            return res.status(303).json({success:false,message:"All fields are required"})

        }
        const CreateProduct= new ProductModel({
            title,desc,Image_url,userId
        })
        await CreateProduct.save()
        return res.status(200).json({success:true,message:"Product Created Successfully",product:CreateProduct})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
const Update=async(req,res)=>{
    try{
        const ProdId=req.params.id
        const {title,desc,Image_url}=req.body
        const FindProd= await ProductModel.findById({ _id:ProdId })
        if(!FindProd){
            return res.status(404).json({success:false,message:"Product not found"})
        }
        const updateProd= await ProductModel.findByIdAndUpdate(
            {
                _id:ProdId
            },
            {
                title,desc,Image_url
            },
            {
                new:true
        })
        return res.status(200).json({success:true,message:"Product Updated Successfully",product:updateProd})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
const Delete=async(req,res)=>{
    try{
        const ProdId=req.params.id
        const FindProd= await ProductModel.findById({ _id:ProdId })
        if(!FindProd){
            return res.status(404).json({success:false,message:"Product not found"})
        }
        const delProd=await ProductModel.findByIdAndDelete({_id:ProdId})
        return res.status(200).json({success:true,message:"Product Deleted Successfully",product:delProd})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
const GetProd=async(req,res)=>{
    try{
        const userId=req.params.userId
        const prods=await ProductModel.find({userId})
        if(!prods){
            return res.status(404).json({success:false,message:"Product not found"})
        }
        return res.status(200).json({success:true,message:"Product Fetched Successfully",product:prods})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
export {ProductCreate, Update, Delete,GetProd}