const Router = require("express");
const axios = require("axios").default;
require("dotenv").config();
const { Country } = require("../db");
const { Activity } = require("../db");

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

router.get("/countrie/:id", async (req, res) => {
  const id = req.params.id;
  const DBcountry = await Country.findAll();
  const country = DBcountry.find(e => e.cca3 === id)
  console.log(country)
    res.send(country);   
});

router.get("/country", async (req, res) => {
  const name = req.query.name;
  console.log(name)
  const search = await axios
    .get(`https://restcountries.com/v3/name/${name}`)
    .catch((error) => {
      return res.status(500).send(error);
    });
  res.send(search.data);
});

router.post("/activity", async (req, res) => {
  const act = req.body; 
  if (act.name === "") return res.status(505).send("Debe tener un nombre");
  await Activity.create(act).catch((error) => {
    return res.status(500).send(error);
  });
  res.send(act);
});



module.exports = router;
