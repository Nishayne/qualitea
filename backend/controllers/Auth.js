import UserModel from '../models/User.js'
import bycrypt from 'bcryptjs'
const Register=async(req,res)=>{
    try{
        const {userName,email,password}=req.body
        if(!userName || !email || !password){
            return res.status(303).json({success:false,message:"All fields are required!"})
        }
        const ExistUser=await UserModel.findOne({email})
        if(ExistUser){
            return res.status(402).json({success:false,message:"User Already Exists, Please Login"})
        }
        const hashPass=await bycrypt.hash(password,10)
        const newUser=new UserModel({
            userName,email,password:hashPass
        }) 
        await newUser.save()
        return res.status(200).json({success:true,message:"User Registered Successfully",user:newUser}      
        )
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})

    }
}
const Login=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email || !password){
            return res.status(303).json({success:false,message:"All fields are required!"})
        }
        const FindUser= await UserModel.findOne({email})
        if(!FindUser){
            return res.status(303).json({success:false,message:"Account not found, Please Register!"})
        }
        const CheckPass= await bycrypt.compare(password,FindUser.password)
        if(!CheckPass){
            return res.status(403).json({success:false,message:"Invalid Password, please try again."})
        }
        return res.status(200).json({success:true,message:"User Logged in Successfully",user:FindUser})
    }
    catch(error){
        console.log(error)
        return res.status(303).json({success:false,message:"Internal Server Error"})
    }
}
export {Register, Login}