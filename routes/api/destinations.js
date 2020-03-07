const router = require('express').Router();
const destinationCtrl = require('../../controllers/destinations');


router.get('/featured', destinationCtrl.getFeatured);

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, destinationCtrl.create);
router.get('/', isAuthenticated, destinationCtrl.index);

function isAuthenticated(req, res, next) {
    if(req.user) return next();
    return res.status(401).json({msg: 'not authorized'})
}

module.exports = router;