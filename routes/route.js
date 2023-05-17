import express from "express";
import { fetchAllStocks, fetchStockDetails } from "../controllers/controller.js";

const router = express.Router();

router.get("/stocks", fetchAllStocks);
router.get("/StockDetails", fetchStockDetails);


export default router;
