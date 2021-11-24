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
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Breed, Temperament } = require('./src/db.js');
const axios = require("axios");
const { API_KEY } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {
  const verifyDb = await Temperament.findAll();
  if (!verifyDb.length) {
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds",
    {headers: {"x-api-key": `${API_KEY}` } });
  const getInfo = await getUrl.data.map((el) => {
      if (el.temperament) {
        return  el.temperament.split(", ")
  };
  });
  const merge = await [].concat.apply([], getInfo);
  const clean = await merge.filter(el => el);
  
  await clean.forEach(el => {
    if(!el){
    Temperament.findOrCreate({ where: {
      name: el,
    }});
  }
  });
}

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
