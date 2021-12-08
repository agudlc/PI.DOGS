const axios = require("axios");
const {Breed, Temperament } = require("../db.js");
const { API_KEY } = process.env;


// ?limit=5
const getTotalBreeds = async (req, res, next) => {
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds",
    {headers: {"x-api-key": `${API_KEY}` } });
    const getInfoApi = await getUrl.data.map((el) => {
        return {
            id: el.id,
            name: el.name,
            weight: el.weight.metric.split(" - "),
            height: el.height.metric.split(" - "),
            image: el.image.url,
            temperament: el.temperament,
            created: el.created? true : false,
        }
    });
    const betterApi = await getInfoApi.map((el) => {
        return {
            id: el.id,
            name: el.name,
            weightMin: el.weight[0],
            weightMax: el.weight[1],
            heightMin: el.height[0],
            heightMax: el.height[1],
            image: el.image,
            temperament: el.temperament,
            created: el.created? true : false,
        }
    })
    // attributes: ["name"]
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
        return betterApi
    } else {
        const info = betterApi.concat(getDbInfo);
        return info;
    }
};

module.exports = {
    getTotalBreeds,
}