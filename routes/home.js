var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var config = require('../config/settings')
var UserModel = require('../models/user');


module.exports = function () {

    router.get('/', function (req, res, next) {
        MongoClient.connect(config.server.localServer, function (err, done) {
            if (err) {
                console.log('error connecting to database')
            } else {
                done.db('abcd').collection('users').find({}).toArray(function (err, done) {
                    if (err) {
                        console.log("error gettting users")
                    } else {
                        res.json(done);
                    }
                })
            }
        })
    })
    return router;
}