const Destination = require('../models/destination');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const destination = await Destination.create(req.body);
        res.json({ destination });
    } catch (error) {
        res.status(401).json({err: 'unauthorized'});
    }
}