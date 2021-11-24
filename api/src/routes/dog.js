const { Router } = require('express');
const { Breed, Temperament } = require("../db.js");
const router = Router();

router.post("/", async (req, res, next) => {
    try {
        let { name, height, weight, life_span, temperament, created} = req.body;
        if ( name && height && weight) {
        const newBreed = await Breed.create({
            name, height, weight, life_span, created
        });
        let temperamentDb = await Temperament.findAll({
            where: {name: temperament}
        });
        await newBreed.addTemperament(temperamentDb);

        res.status(200).send(newBreed);
        } else {
            res.send("the breed is not valid");
        }
    } catch (err) {
        next(err)
    }
});

module.exports = router;