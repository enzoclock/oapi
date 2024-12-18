import { Router } from "express";

import currenciesRates from "./data/currencies/rates.js";
import currenciesInfo from "./data/currencies/details.js";
import weatherCity from "./data/weather/cities.js";

export const router = Router();

router.get("/currencies", (_, res) => { res.json(currenciesInfo); });
router.get("/currencies/rates", (_, res) => { res.json(currenciesRates); });

router.get("/weather/cities", (req, res) => {
  const shouldRandomize = (req.query.random === "true"); 
  
  if (shouldRandomize) {
    res.json(weatherCity.map(randomizeTemperature));
  } else {
    res.json(weatherCity);
  }

  function randomizeTemperature(city) {
    const diff = Math.floor(Math.random() * 11) - 5;
    const temperatureCelsius = city.temperatureCelsius + diff;
    return { ...city, temperatureCelsius };
  }
});

