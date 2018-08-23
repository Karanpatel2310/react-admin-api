let http = require('http');
require("dotenv").config();
let app = require('./config/app');

http.createServer(app).listen(app.get('port'), function () {
    console.log('SERVER LISTING ON PORT ' + process.env.SERVER_PORT);
});
