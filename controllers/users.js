const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    signup
};

 async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);

        res.json({ token });
    } catch (error) {
        res.status(400).json(error);
    }
}

function createJWT(user) {
     return jwt.sign(
         { user }, 
        SECRET, 
        { expiresIn: '24h' }
    );
}