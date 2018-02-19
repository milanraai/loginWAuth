module.exports.map_products = function(product, productDetail){

    if(productDetail.catagory){
        product.catagory = productDetail.catagory;
    }
    if(productDetail.name){
        product.name = productDetail.name;
    }
    if(productDetail.brand){
        product.brand = productDetail.brand;
    }
    if(productDetail.measurementUnit){
        product.measurementUnit = productDetail.measurementUnit;
    }
    if(productDetail.price){
        product.price = productDetail.price;
    }
    if(productDetail.color){
        product.color = productDetail.color;
    }
    if(productDetail.status){
        product.status = productDetail.status;
    }
    if(productDetail.quantity){
        product.quantity = productDetail.quantity;
    }
    if(productDetail.origin){
        product.origin = productDetail.origin;
    }
    if(productDetail.description){
        product.description = productDetail.description;
    }
    if(productDetail.attributes){
        product.attributes = productDetail.attributes;
    }
    if(productDetail.manuDate){
        var date = new Date();
        var dateStamp = date.getDate() + " " + date.getDay() + " " + date.getFullYear();
        product.manuDate = dateStamp;
    }
    if(productDetail.dimensions){
        product.dimensions = productDetail.dimensions;
    }
    if(productDetail.imageName){
        product.imageName = productDetail.imageName;
    }
    if(productDetail.feedbacks){
        product.feedbacks = productDetail.feedbacks;
    }
    if(productDetail.address){
        product.address = productDetail.address;
    }
    if(productDetail.tags){
        product.tags = productDetail.tags;
    }
    
    return product;
}