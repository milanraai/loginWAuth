var mongoose = require('mongoose')
var Schema = mongoose.Schema; 

var locationSchema = new Schema({
    houseNo : String,
    streetAddress : String,
    city : String,
    zone : String,
    zipCode : String
});

var distributorSchema = new Schema({
    name : String,
    address : locationSchema,
    email : String,
    contactNumber : Number
})

var productSchema = new Schema({
    catagory : {
        type : String
    },
    name : {
        type : String
    },
    brand : {
        type : String
    },
    measurementUnit : {
        type : String
    },
    price : {
        type : Number
    },
    color : {
        type : String
    },
    status : {
        type : String,
        default : 'available'
    },
    quantity : {
        type : Number
    },
    origin : {
        type : String
    },
    description : {
        type : String
    },
    attributes : {
        type : String
    },
    manuDate : {
        type : Date,
        default : Date.now()
    },
    dimensions : {
        type : String
    },
    imageName : [String],
    feedbacks : {
        type : String
    },
    address : locationSchema,
    tags : [String],
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }


})

module.exports = mongoose.model('Product', productSchema);