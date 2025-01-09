import { Router } from "express";

import currenciesRates from "./data/currencies/rates.js";
import currenciesInfo from "./data/currencies/details.js";
import weatherCity from "./data/weather/cities.js";
import blogPosts from "./data/blog/posts.js";
import blogCategories from "./data/blog/categories.js";
import macarons from "./data/macarons/macarons.js";
import recipes from "./data/recipes/recipes.js";

export const router = Router();


// GET /api/currencies
router.get("/currencies", (_, res) => { res.json(currenciesInfo); });

// GET /api/currencies/rates
router.get("/currencies/rates", (_, res) => { res.json(currenciesRates); });

// GET /api/blog/posts
router.get("/blog/posts", (_, res) => { res.json(blogPosts); });

// GET /api/blog/categories
router.get("/blog/categories", (_, res) => { res.json(blogCategories); });

// GET /api/macarons
router.get("/macarons", (_, res) => { res.json(macarons); });

// GET /api/weather/cities(?random=true)
router.get("/weather/cities", weatherHandler);

// GET /api/recipes
router.get("/recipes", (_, res) => { res.json(recipes); });

// Not found
router.use((_, res) => { res.status(404).json({ status: 404, message: "Not found" }); })




function weatherHandler(req, res) {
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
}