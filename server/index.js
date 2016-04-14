var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NW-Filter');
//use environment variables
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var productSchema = new mongoose.Schema({
	name: String
});

var Product = mongoose.model('Products', productSchema);

module.exports = {
	Product: Product
};
