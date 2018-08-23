const mongoose = require('mongoose');
// const option = {
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     reconnectTries: 30000
// };

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://' + process.env.DATABASEURL + ':' + process.env.DATABSEPORT + '/' + process.env.DATABASE, { useNewUrlParser: true })
    .then(resopnse => {
        console.log(`${process.env.DATABASE} Database server connected....`);
    })
    .catch(error => {
        console.log(error);
        console.log("Could not connect Database server....");
    });