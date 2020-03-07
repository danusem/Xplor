const JWT = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    let token = req.get('Authorization');
    
    if(token) {
        token = token.replace('Bearer ', '');
        JWT.verify(token, SECRET, function(err, decoded) {
            if(err) {
                next(err);
            } else {
                req.user = decoded.user;
                next();
            }
        })
    } else {
        next();
    }
}