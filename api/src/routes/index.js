const Router = require("express");
const axios = require("axios").default;
require("dotenv").config();
const { Country } = require("../db");

const router = Router();

router.get("/countries", async (_req, res) => {
  const countriesDB = await Country.findAll();
  if (countriesDB.length === 0) {
    const countriesapi = await axios
      .get(`https://restcountries.com/v3/all`)
      .catch((error) => {
        return res.status(500).send(error);
      });
    countriesapi.data.map((country) => Country.create(country));
    return res.send(countriesapi.data);
  }
  res.send(countriesDB);
});

module.exports = router;
