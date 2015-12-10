var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var productSchema = mongoose.Schema({
	ref:  String,
    category: String,
    brand: String,
    name: String,
    price: String,
    img: String,
  	details: String
});

// on every save, add the date
productSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

module.exports = mongoose.model('Product', productSchema);