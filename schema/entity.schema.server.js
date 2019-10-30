const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({
    _id : String,
    name : String,
    label : String

} , {collection : 'entities'});

module.exports = entitySchema;