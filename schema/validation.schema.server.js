const mongoose = require('mongoose');

const validationSchema = mongoose.Schema({
    name : String,
    value : String,
    fieldId : {type : mongoose.Schema.Types.ObjectId , ref : 'FieldModel'}

} , {collection : 'validations'});

module.exports = validationSchema;
 
