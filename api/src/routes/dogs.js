const { Router } = require('express');
const axios = require("axios");
const { Temperament, Breed} = require("../db");
const router = Router();

const getApiInfo = async () => {
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
    return getInfo;
};

const getDbInfo = async () => {
    return await Breed.findAll({
            include: {
                model: Temperament,
                attributes: ["name"],
                through: { 
                    attributes: [],
                },
            }
        }) 
};
const getTotal = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const info = apiInfo.concat(dbInfo);
    return info;
} 


router.get("/", async (req, res, next) => {
    let name = req.query;
    let breeds = await getTotal();
    if (name) {
        let breedName = await breeds.filter(el => {
            el.name.includes(name);
        });
        if(breedName.length) { 
            return res.status(200).send(breedName);
        } 
        // else {
        // //     return res.status(404).send("don't have that breed");
        // // }
    }
    return res.status(200).send(breeds);
});

router.get("/{idRaza}", (req, res, next) => {
    res.send("soy get por id");
});


module.exports = router;
