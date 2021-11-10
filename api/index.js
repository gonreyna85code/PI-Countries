//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
// 

const { Country } = require("./src/db");
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require("axios").default;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const api = await axios
      .get(`https://restcountries.com/v3/all`)
      .catch((error) => {
        return res.status(500).send(error);
      });
      await api.data.map((country) =>
      Country.create({
        cca3: country.cca3,
        name: country.name.common,
        capital: country.capital?.[0],
        population: country.population,
        subregion: country.subregion,
        flags: country.flags[0],
        continents: country?.continents?.[0],
        area: country.area,
      })
    );
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
