const { Router } = require('express');
const axios = require("axios");
const {Temperament} = require('../db.js');
const { API_KEY } = process.env;
const router = Router();


router.get("/", async (req, res, next) => {
    // const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds",
    //   {headers: {"x-api-key": `${API_KEY}` } });
    // const getInfo = await getUrl.data.map((el) => {
    //     if (el.temperament) {
    //       return  el.temperament.split(", ")
    // };
    // });
    // const merge = await [].concat.apply([], getInfo);
    // const clean = await merge.filter(el => el);
    // const upToDb = await clean.forEach(el => {
    //       Temperament.findOrCreate({ where: {
    //         name: el,
    //       }});
    //     });
    
    // res.status(200).send(upToDb);
})


module.exports = router;
