module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'webappmakerdb';
    var connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString).then((result) => {
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