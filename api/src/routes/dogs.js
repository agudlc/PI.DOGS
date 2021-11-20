const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    res.send("soy get de las razas");
});
router.get("dogs?name=:", (req, res, next) => {
    res.send("soy get por name");
});
router.get("/{idRaza}:", (req, res, next) => {
    res.send("soy get por id");
});


module.exports = router;
