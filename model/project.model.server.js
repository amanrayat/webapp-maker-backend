const mongoose = require('mongoose');
const projectSchema = require('../schema/project.schema.server');
const projectModel = mongoose.model('ProjectModel' , projectSchema);

module.exports = projectModel;
