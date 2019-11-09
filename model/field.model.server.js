const mongoose = require('mongoose');
const fieldSchema = require('../schema/field.schema.server');
const fieldModel = mongoose.model('FieldModel' , fieldSchema);

module.exports = fieldModel;