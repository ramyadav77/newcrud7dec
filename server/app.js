import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/userRoutes.js';

dotenv.config();


 const app=express();

 app.use(cors());
 app.use(express.json());

 const PORT=process.env.PORT;
 const URL=process.env.MONGO_URL;

 mongoose.connect(URL).then(()=>{
    console.log("db connected successfully");
    app.listen(PORT,()=>{
        console.log(`server running on port:${PORT}`)
    })
 }).catch(()=>console.log(errer))

 app.use("/api/user",routes)
