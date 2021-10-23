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
  const country = DBcountry.find((e) => e.cca3 === id);
  res.send({
    cca3: country.cca3,
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    subregion: country.subregion,
    flags: country.flags[1],
    continents: country.continents[0],
    area: country.area,
  });
});

router.get("/country", async (req, res) => {
  const name = req.query.name;
  console.log(name);
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
  await Activity.create(act);
  const DBact = await Activity.findAll({
    where: {name: act.name}
  });  
  var current = await Country.findByPk(act.countries);
  await current.addActivity(DBact[0].id);
  res.send(DBact);
});

module.exports = router;
