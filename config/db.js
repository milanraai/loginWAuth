var mongoose = require('mongoose');
 
module.exports = function (config) {
    mongoose.connect(config.server.remoteServer);
    
    mongoose.connection.on('error', function (err) {
        console.log('error connect to database')
    })
    mongoose.connection.once('open', function (done) {
        console.log('successfully connectd to ' + config.server.remoteServer)
    })
}

