const { Router } = require('express');
const dogsRoute = require("./dogs");
const dogRoute = require("./dog");
const temperamentRoute = require("./temperament");
const router = Router();

router.use('/dogs', dogsRoute);
router.use('/dog', dogRoute);
router.use('/temperament', temperamentRoute);

module.exports = router;
