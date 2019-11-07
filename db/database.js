module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'webappmakerdb';
    let connectionString = 'mongodb://127.0.0.1/';
    connectionString += databaseName;
    mongoose.connect(connectionString, {useNewUrlParser: true}).then((result) => {
        console.log(result)
    }).catch( err => {
        console.log("Not Connected " + err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });
    });
};
