const axios = require("axios");
const {Breed, Temperament } = require("../db.js");
const { API_KEY } = process.env;



const getTotalBreeds = async (req, res, next) => {
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds?limit=5",
    {headers: {"x-api-key": `${API_KEY}` } });
    const getInfoApi = await getUrl.data.map((el) => {
        return {
            name: el.name,
            weight: el.weight.metric,
            image: el.image.url,
            temperament: el.temperament
        }
    });
    const getDbInfo = await Breed.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: { 
                attributes: [],
            },
        }
    });

    if(!getDbInfo) {
        return getInfoApi
    } else {
        const info = getInfoApi.concat(getDbInfo);
        return info;
    }
};

module.exports = {
    getTotalBreeds,
}