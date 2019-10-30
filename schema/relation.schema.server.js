const mongoose = require('mongoose');

const relationSchema = mongoose.Schema({
    _id : String,
    entityId : {type : mongoose.Schema.Types.ObjectId , ref : 'EntityModel'},
    entityFieldId : {type : mongoose.Schema.Types.ObjectId , ref : 'FieldModel'},
    fieldId : {type : mongoose.Schema.Types.ObjectId , ref : 'FieldModel'}

} , {collection : 'relations'});

module.exports = relationSchema;