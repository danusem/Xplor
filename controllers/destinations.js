const Destination = require('../models/destination');

module.exports = {
    create,
    index
};

async function index(req, res) {
    try {
        const destinations = await Destination.find({})
        .sort('-createdAt').populate('addedBy');
        res.json({ destinations });
    } catch (error) {
        res.status(400).json({err: 'unauthorized'});
    }
}

async function create(req, res) {
    try {
        const destination = await Destination.create(req.body);
        res.json({ destination });
    } catch (error) {
        res.status(401).json({err: 'unauthorized'});
    }
}