import { Router } from "express";
import currenciesRates from "./data/currencies-rates.js";
import currenciesInfo from "./data/currencies-info.js";

export const router = Router();

router.get("/currencies", (req, res) => { res.json(currenciesInfo); });
router.get("/currencies/rates", (req, res) => { res.json(currenciesRates); });
