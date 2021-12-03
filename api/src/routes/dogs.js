const { Router } = require('express');
const axios = require("axios");
const { Temperament, Breed} = require("../db");
const { API_KEY } = process.env;
const router = Router();
const { getTotalBreeds } = require("../functions/breeds");

// const getApiInfo = async () => {
//     const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds?limit=5",
//     {headers: {"x-api-key": `${API_KEY}` } });
//     const getInfo = await getUrl.data.map((el) => {
//         return {
//             name: el.name,
//             id: el.image.id,
//             weight: el.weight.metric,
//             height: el.height.metric,
//             lifespan: el.life_span,
//         }
//     });
//     return getInfo;
// };

// const getDbInfo = async () => {
//     return await Breed.findAll({
//             include: {
//                 model: Temperament,
//                 attributes: ["name"],
//                 through: { 
//                     attributes: [],
//                 },
//             }
//         }) 
// };
// const getTotal = async () => {
//     const apiInfo = await getApiInfo();
//     const dbInfo = await getDbInfo();
//     if(!dbInfo) {
//         return apiInfo;
//     }
//     const info = apiInfo.concat(dbInfo);
//     return info;
// } 


router.get("/", async (req, res, next) => {
   try {
    let name = req.query.name;
    let breeds = await getTotalBreeds();
    if (name) {
        const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds",
    {headers: {"x-api-key": `${API_KEY}` } });
    const breed = getUrl.data?.map((el) => {
        return {
            name: el.name,
            id: el.id,
        }
    })    
    let breedName = await breed.filter(el => {
            if (el.name.toLowerCase().includes(name.toLowerCase())) {
                return el;
            }
        });
        
        if(breedName.length) { 
            return res.send(breedName);
        } 
        else {
            return res.status(404).send("don't have that breed");
        }
    }
    return res.status(200).send(breeds);
   } catch (err) {
       next(err);
   }
    
    
});

router.get("/:idRaza", async (req, res, next) => {
    try {
    const id = req.params.idRaza;
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds",
    {headers: {"x-api-key": `${API_KEY}` } });
    // console.log(getUrl.data);
    const filterIdApi = getUrl.data.filter((el) => el.id == id);
    const breedApi = await filterIdApi.map((el) => { 
            return {
                name: el.name,
                weight: el.weight.metric,
                image: el.image.url,
                temperament: el.temperament.split(", "),
                height: el.height.metric,
                life_span: el.life_span,
            };
    });
    if (breedApi.length > 0) return res.status(200).send(breedApi);

    const getInfoBreed = await Breed.findAll({
        where: {
            id: id
        },attributes: {exclude: ["created", "createdAt", "updatedAt", "id"]},
        include: {
            model: Temperament,
            attributes: ["name"],
            through: { 
                attributes: [],
            },
        }
    });
    if (getInfoBreed.length) {
        res.status(200).send(getInfoBreed);
    } else {
        res.status(404).send("breed not found");
    }
} catch (err) {
    next(err);
}
    
});


module.exports = router;
