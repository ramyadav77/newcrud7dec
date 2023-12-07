import users from '../models/userModel.js';

 export const create=async(req,res)=>{
    try {
        const userdata=new users(req.body)
        const {email}=userdata;
        const userexist=await users.findOne({email})
        if(userexist){
            return res.status(400).json({msg:"already exists"})
        }
        const saveduser=await userdata.save();
        res.status(200).json(saveduser)
    } catch (error) {
        res,send(500).json({error:"internal server errror"})
    }
 }
 

 export const fetch=async(req,res)=>{
    try {
        const allusers=await users.find();
        if(allusers.length===0){
            return res.status(500).json({msg:"users not found"})
        }
        res.status(200).json(allusers);
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
    }
 }

  export const update=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexist=await users.findOne({_id:id })
        if(!userexist){
            return res.status(404).json({message:"user not found "})
        }
        const updateduser=await users.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateduser)
    } catch (error) {
        res.status(500).json({msg:"internal server error"})

    }
  }

  export const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexist=await users.findOne({_id:id })
        if(!userexist){
            return res.status(404).json({message:"user not found "})
        }
        await users.findByIdAndDelete(id)
        res.status(200).json({msg:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({msg:"internal server error"})

    }
  }