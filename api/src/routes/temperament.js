const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    res.send(" soy get de temperaments");
})


module.exports = router;
