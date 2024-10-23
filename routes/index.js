import express, {Router} from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/", (req, res)=>{
 return res.send('in routing');
});
appRouter.get("/:id",getProduct);
appRouter.post("/create", createProduct);
appRouter.put("/update/:id",updateProduct);
appRouter.delete("/delete/:id",deleteProduct);

export default appRouter;