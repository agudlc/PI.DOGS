const { Router } = require('express');
const { Breed } = require("../db.js");
const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const breed = req.body;
        if (breed) {
        const newBreed = await Breed.create(breed);
        res.send(newBreed);
        } else {
            res.send("the breed is not valid");
        }
    } catch (err) {
        next(err)
    }
});

module.exports = router;