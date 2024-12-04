import express from "express";
import CurrencyController from "../controllers/currencyController";


const router = express.Router()

// PRODUCTS
router.get('/all-currencies', CurrencyController.getAllCurrencies)
router.get('/one-currency', CurrencyController.getOneCurrency)


export default router;