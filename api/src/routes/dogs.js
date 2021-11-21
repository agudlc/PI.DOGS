const { Router } = require('express');
const axios = require("axios");
const Breed = require('../models/Breed');
const Temperament = require("../models/Temperament");
const router = Router();

router.get("/", async (req, res, next) => {
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds?limit=3?api_key=bf4cac36-d33c-4fbc-bb46-2aac021fc61d");
    const getInfo = await getUrl.data.map((el) => {
        return {
            name: el.name,
            id: el.id,
            weight: el.weight.metric,
            height: el.height.metric,
            lifespan: el.life_span
        }
    });
    // const getDbInfo = async () => {return await Breed.findAll({
    //     include: {
    //         model: Temperament,
    //         attributes: ["name"],
    //         through: { 
    //             attributes: [],
    //         },
    //     }
    // }) };
    // const infoTotal= getInfo.concat(getDbInfo)
    res.json(getInfo);
});
router.get("/dogs?name=:name", async (req, res, next) => {
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=bf4cac36-d33c-4fbc-bb46-2aac021fc61d");
    const name = req.params.name.toLocaleLowerCase();
    const dogInfo = await getUrl.data.find((el) => {
        el.name.toLocaleLowerCase() === name
    })
    if (!dogInfo) {
        return res.status(404).json({error: "No existe ninguna raza con el nombre indicado"});
    }

    res.json(dogInfo);
});
router.get("/{idRaza}", (req, res, next) => {
    res.send("soy get por id");
});


module.exports = router;
