const router = require('express').Router();
const destinationCtrl = require('../../controllers/destinations');

router.post('/', destinationCtrl.create);
router.get('/', destinationCtrl.index);
router.get('/featured', destinationCtrl.getFeatured);

module.exports = router;