const Router = require("express");
const axios = require("axios").default;
require("dotenv").config();
const { Country } = require("../db");
const { Activity } = require("../db");

const router = Router();

   
router.get("/countries", async (_req, res) => {     
    res.send(await Country.findAll({
      include: Activity
    }));
});

router.get("/countrie/:id", async (req, res) => {
  const id = req.params.id;
  const country = await Country.findByPk(id, {
    include: Activity
  });
  
  res.send(country);
});

router.get("/activity", async (req, res) => {
  const acts = await Activity.findAll();  
  res.send(acts);
});

router.get("/country", async (req, res) => {
  const name = req.query.name;
  var finish = name?.split(' ').filter(e => e !== '');
  var regex = new RegExp(finish, 'ig')
  const search = await Country.findAll();
  const find = search.filter((d) => d.name.match(regex));
  
  res.send(find);
});

router.post("/activity", async (req, res) => {
  const act = req.body;
  if (act.name === "") return res.status(505).send("Debe tener un nombre");
  await Activity.create(act);
  const DBact = await Activity.findAll({
    where: { name: act.name },
  });  
  act.country.map(async (country) => {
    var current = await Country.findByPk(country.country);
    current.addActivity(DBact[0].id);});
  res.send(DBact);
});


module.exports = router;
