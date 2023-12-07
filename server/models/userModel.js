import mongoose from 'mongoose';

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true

    }
},{
    timestamps:true,
})

const users=new mongoose.model("users",userschema);
 export default users;