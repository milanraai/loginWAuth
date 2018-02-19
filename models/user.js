var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: Number,
    email: {
        type: String,
        unique: true
    },
    address: {
        address1: String,
        address2: String,
        city: String,
        zone: String
    },
    activeStatus: {
        type: Boolean,
        default: true
    }
})
var UserModel = mongoose.model('User', userSchema) // 'User - is the collection name'
module.exports = UserModel;


