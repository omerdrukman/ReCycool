var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var pointSchema = new Schema({

module.exports = mongoose.model('point', pointSchema);