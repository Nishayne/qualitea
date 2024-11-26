import mongoose from 'mongoose'

const DbCon=async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB is connected.")
    }
    catch(error){
        console.log("MongoDB is not connected.",error)
    }
}
export default DbCon