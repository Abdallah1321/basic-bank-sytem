import express from "express";
import { createTransaction, getTransactions } from "../controllers/transactions.js";

const router = express.Router();

//Create Transactions
router.post('/', createTransaction)

//Get Transactions
router.get('/', getTransactions)

export default router;
