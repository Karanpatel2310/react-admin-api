const express = require('express');

// Routes Path
const loginRoute = require('./modules/user/userRoute')

let app = express.Router();

//Routes
app.use('/api/v1/admin', loginRoute);


app.all('/*', function (req, res) {
    return res.status(404).json({ message : "Invalid Request" });
});

module.exports = app;
