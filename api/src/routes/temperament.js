const { Router } = require('express');
const axios = require("axios");
const {Temperament} = require('../db.js');
const { API_KEY } = process.env;
const router = Router();


router.get("/", async (req, res, next) => {
  try {
    const get = await Temperament.findAll();
    res.status(200).json(get);
  } catch (err) {
    next(err);
  }
//     try {const verifyDb = await Temperament.findAll();
//   if (verifyDb.length < 1) {
//     const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds",
//     {headers: {"x-api-key": `${API_KEY}` } });
//   const getInfo = await getUrl.data.map((el) => {
//       if (el.temperament) {
//         return  el.temperament.split(", ")
//   };
//   });
//   const merge = await [].concat.apply([], getInfo);
//   const clean = await merge.filter(el => el);
  
//   const ready = await clean.forEach(el => {
//     if(el){
//     Temperament.findOrCreate({ where: {
//       name: el,
//     }});
//   }
//   });
//   return res.status(200).json(ready);
// };
// res.status(200).json(verifyDb);
//  } catch(err) {
//      next(err)
//  }

})


module.exports = router;
