import express  from "express";
import getProducts from "../controllers/productsController.js";

const seedRouter = express.Router();
seedRouter.get('/', getProducts());

export default productsRouter;