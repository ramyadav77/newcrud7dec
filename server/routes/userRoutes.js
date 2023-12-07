import express from 'express';
import { create, deleteuser, fetch, update } from '../controllers/userControlleers.js';

const routes=express.Router()

routes.post("/create",create)
routes.get("/fetch",fetch)
routes.put("/update/:id",update)
routes.delete("/delete/:id",deleteuser)

export default routes;