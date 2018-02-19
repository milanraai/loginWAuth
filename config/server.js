module.exports.server = function(){
   return 'mongodb://localhost:27017';
}

module.exports.mlabServer = function(){
    return 'mongodb://sabin:test@ds251827.mlab.com:51827/broadway';
 }

// module.exports.mongooseDb = function(dbName){
//     return 'mongodb://localhost:27017/' + dbName;
//  }
