const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email : String,
    role : String,
    phoneNo : Number,
}, {collection: 'user'});

module.exports = userSchema;
