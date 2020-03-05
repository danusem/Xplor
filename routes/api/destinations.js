const router = require('express').Router();
const destinationCtrl = require('../../controllers/destinations');

router.post('/', destinationCtrl.create);
router.get('/', destinationCtrl.index);

module.exports = router;