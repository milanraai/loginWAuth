var jwt = require('jsonwebtoken');
var config = require('../config/settings');

var userModel = require('../models/user')

module.exports = function (req, res, next) {
    var token;
    if (req.headers['x-access-token'])
        token = req.headers['x-access-token'];
    if (req.headers['Authorization'])
        token = eq.headers['Authorization'];
    if (req.query.token)
        token = req.query.token;

    if (token) {
        var validUser = jwt.verify(token, config.params.secret);
        //console.log('user >> ', validUser);
        if (validUser) {
            userModel.findById(validUser.user, function (err, user) {
                if (err) {
                    return next(err);
                }
                if (user) {
                    req.user = validUser.user;
                    return next();
                } else {
                    return next({
                        message: "user not found"
                    })
                }
            })

        } else {
            return next({
                status: 401,
                message: 'Invalid token or token expired'
            })
        }

    } else {
        return next({
            status: 403,
            message: 'Token not provided'
        })
    }

}

/*

*/
