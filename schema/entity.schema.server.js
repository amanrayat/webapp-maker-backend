const mongoose = require('mongoose');

const entitySchema = mongoose.Schema({
    name : String,
    label : String,
    projectId : {type : mongoose.Schema.Types.ObjectId , ref : 'ProjectModel'}
} , {collection : 'entities'});

module.exports = entitySchema;


