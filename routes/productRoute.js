var express = require('express');
var router = express.Router();

var helpers = require('../helpers/productHelpers')
 var productsModel = require('../models/products');
 var userModel = require('../models/user')

module.exports = function(){

    router.get('/', function (req, res, next) {

    console.log('USER >>>>> ', req.user)
        productsModel.find({})
        .sort({ 
            price : 1,
        })
       .populate('user')
       .exec(function(err, products){
           if(err){
               return next(err);
           }else {
           res.status(200).json(products);
           }
       })
    });


    router.get('/:id', function (req, res, next) {
        var id = req.params.id;

        productsModel.findById(id)
        .exec(function(err, product){
            if(err){
                next(err)
            }
            if(product){
                    res.status(200).send(product)
            } else {
                res.json({
                    result : "not found"
                })
            }
        })
    });

    // insert product
    router.post('/', function (req, res, next) {
        
        var newProduct = new productsModel() ;
        var mappedNewProduct = helpers.map_products(newProduct, req.body);
        mappedNewProduct.user = req.user;
        //console.log(req.user)
        mappedNewProduct.save((err, savedProd) => {
            if(err){
                return next(err)
            } else {                
                res.status(200).json(savedProd);
            }
        })
    });
    router.put('/:id', function (req, res, next) {
    
    });
    router.delete('/:id', function (req, res, next) {
    
    });
    
    // search product
    router.post('/search', function (req, res, next) {
        var condition = {};
        var searchQuery = helpers.map_products(condition, req.body);

        productsModel.find(searchQuery)
        .exec(function(err, result){
            if(err){
                return next(err)
            } else {
                res.status(200).json(result);
            }
        })
    
    });

    return router;
}
