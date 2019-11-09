const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({
    name : String,
    label : String,
    type : String,
    entityId : {type : mongoose.Schema.Types.ObjectId , ref : 'EntityModel'}

} , {collection : 'fields'});

module.exports = fieldSchema;
