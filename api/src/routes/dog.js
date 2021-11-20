const { Router } = require('express');
const router = Router();

router.post("/", (req, res, next) => {
    res.send("soy post de razita");
});

module.exports = router;