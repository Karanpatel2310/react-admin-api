const express = require('express');
global._ = require("lodash")
const bodyParser = require('body-parser');
const cors = require('cors');
global.l10n = require('jm-ez-l10n');
l10n.setTranslationsFile('en', './language/translation.en.json');
l10n.setTranslationsFile('es', './language/translation.sp.json');
require('../config/database.js');
const app = express();
const mongoose = require('mongoose');
function exitHandler(options, err) {
    mongoose.connection.close()
    process.exit();
}
process.on('SIGINT', exitHandler.bind(null,{cleanup:true}));
app.use(l10n.enableL10NExpress);
app.set('port', process.env.PORT);
app.use(bodyParser.json({limit: '1gb'}));
app.use(bodyParser.urlencoded({ extended: false ,limit:'1gb'}));
app.use(cors());
app.use(require('../route.js'));

module.exports = app;

