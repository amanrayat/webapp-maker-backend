const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectName: String,
    userId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel'}
}, {collection: 'project'});

module.exports = projectSchema;
