const router = require('express').Router();
const destinationCtrl = require('../../controllers/destinations');

router.post('/', destinationCtrl.create);

module.exports = router;