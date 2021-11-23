const { Router } = require('express');
const axios = require("axios");
const router = Router();

const getApiInfo = async () => {
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds?limit=3?api_key=bf4cac36-d33c-4fbc-bb46-2aac021fc61d");
    const getInfo = await getUrl.data.map((el) => {
        return el.temperament.split(",");
    });
    const temperaments = getInfo.reduce((a, b) => {
        a.concat(b);
    })
    return temperaments;
};

router.get("/", (req, res, next) => {
    const temperaments = getApiInfo();
    res.status(200).send(temperaments);
})


module.exports = router;
