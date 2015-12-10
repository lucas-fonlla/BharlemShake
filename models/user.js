var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Product = require('./product');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    token: String,
    products : [{type:mongoose.Schema.Types.ObjectId, ref:'Product'}]
});

// on every save, add the date
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

module.exports = mongoose.model('User', userSchema);