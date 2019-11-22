module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'heroku_63z8ldhk';
    let connectionString = 'mongodb://webappmaker:webappmaker1@ds153766.mlab.com:53766/';
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
