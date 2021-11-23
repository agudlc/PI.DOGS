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


router.get("", async (req, res, next) => {
   try {
    let name = req.query.name;
    let breeds = await getTotalBreeds();
    if (name) {
        let breedName = await breeds.filter(el => {
            el.name.toLowerCase().includes(name);
        });
        if(breedName.length > 0) { 
            return res.status(200).send(breedName);
        } 
        // else {
        // //     return res.status(404).send("don't have that breed");
        // // }
    }
    return res.status(200).send(breeds);
   } catch (err) {
       next(err);
   }
    
    
});

router.get("/{idRaza}", (req, res, next) => {
    res.send("soy get por id");
});


module.exports = router;
