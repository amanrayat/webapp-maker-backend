const mongoose = require('mongoose');
const entitySchema = require('../schema/entity.schema.server');
const entityModel = mongoose.model('EntityModel' , entitySchema);

module.exports = entityModel;
