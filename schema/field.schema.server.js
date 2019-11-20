const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({
    name : String,
    label : String,
    type : String,
    validation: String,
    enumerations: String,
    relation: String,
    relationEntity: {type : mongoose.Schema.Types.ObjectId , ref : 'EntityModel'},
    relationField: {type : mongoose.Schema.Types.ObjectId , ref : 'FieldModel'},
    entityId : {type : mongoose.Schema.Types.ObjectId , ref : 'EntityModel'}
} , {collection : 'fields'});

module.exports = fieldSchema;
