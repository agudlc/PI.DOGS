const { Router } = require('express');
const { Breed, Temperament } = require("../db.js");
const router = Router();

router.post("/", async (req, res, next) => {
    try {
        let { name, height, weightMax, weightMin, life_span, temperament, created} = req.body;
        let weight = `Max: ${weightMin} Kg-Min: ${weightMax} Kg`;
        if ( name && height && weight) {
        const newBreed = await Breed.create({
            name, height, weight, life_span, created
        });
        await temperament.forEach(async (temperament) => {
            let temperamentDb = await Temperament.findAll({
                where: {name: temperament}
            });
            return await newBreed.addTemperament(temperamentDb);
        });
       
         
        res.status(200).send("New good boy in town");
        } else {
            res.send("the breed is not valid");
        }
    } catch (err) {
        next(err)
    }
});

module.exports = router;