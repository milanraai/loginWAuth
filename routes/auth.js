var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var helpers = require('../helpers/userHelpers')

var serverName = require('./../config/settings')
require('../config/db')(serverName);

var UserModel = require('./../models/user');

function createToken(data, config){
    var token = jwt.sign({
            user: data._id
         }, config.params.secret);  
         
         return token;
}
module.exports = function (config) {  
    router.get('/', function (req, res, next) {
        console.log(req.body)
        res.send("this is auth index")
        
    })

    router.post('/login', function (req, res, next) {
        console.log("backend login is firing with data >>", req.body)

        if (req.body.username) {
            console.log("this is req data >>", req.body)
            UserModel.findOne({ username: req.body.username }, function (err, user) {
                if (err) {
                    return next(err)
                }
                if (user) {
                    if (passwordHash.verify(req.body.password, user.password)) {
                        console.log("login success");
                        var token  = createToken(user,config);
                        res.status(200).send({
                            user : user,
                            token : token
                        });
                    } else {
                        console.log("password mismatch");
                    } 
                }
                else {
                    console.log("nothing found - auth express backend >> ", err)
                }
            })
        } else {
            console.log("please enter login values");
            next("please enter login values")
        }
    })

    router.post('/signup', function(req, res, next){
        if(req.body.username && req.body.password){
            
            var newUser = new UserModel();
            var newMappedUser = helpers.map_user_req(newUser, req.body);
            newMappedUser.save(function(err, savedUser){
                if(err){
                    return next(err)
                }else {
                    console.log("new user saved to database");
                    res.json(savedUser);
                }
            })
        }
    })

    return router;

}