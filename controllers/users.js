const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login
};

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).json({err: 'bad credentials'});
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                return res.status(401).json({err: 'bad credentials'});
            }
        });
    } catch (error) {
        res.status(500).json({err: 'this request cannont be completed at this time'})
    }
}

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