const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({
    name : String,
    label : String

} , {collection : 'entities'});

module.exports = entitySchema;


