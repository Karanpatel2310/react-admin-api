const config = require('../config/config')
const utilsfunction = require('./utils');
const fs = require('fs');
const AWS = require('aws-sdk');
const credentials = config.credentials;
AWS.config.update({
    accessKeyId: credentials.accessKey,
    secretAccessKey: credentials.sharedSecret,
    region: credentials.region
})
const awsUtils = {}
const SES_CONFIG = _.extend(AWS, { apiVersion: '2018-01-01' });
const ses = new AWS.SES(SES_CONFIG);

awsUtils.sendEmail = (emailBody, callback) => {
    let resetpwd = "./mail-content/" + emailBody.filename + ".html";
    utilsfunction.getHtmlContent(resetpwd, function (err, content) {
        content = content.replace(/{USERNAME}/gi, emailBody.fname);
        content = content.replace(/{LASTNAME}/gi, emailBody.lname);
        content = content.replace(/{LINK}/gi, emailBody.link);
        content = content.replace(/{EMAIL}/gi, emailBody.email);
        content = content.replace(/{PASSWORD}/gi, emailBody.password);
        var to = emailBody.email;
        var from = "kalpesh.hadiyal@solutionanalysts.com";
        ses.sendEmail({
            Source: "WinWinks<" + from + ">",
            Destination: { ToAddresses: [to] },
            ReplyToAddresses: [emailBody.email],
            Message: {
                Subject: {
                    Data: emailBody.subject
                },
                Body: {
                    Html: {
                        Data: content,
                    }
                }
            }
        }, function (error, data) {
            if (error) {
                isEmailSent = false;
            } else {
                isEmailSent = true;
            }
            callback(error, isEmailSent);
        });
    });
}

module.exports = awsUtils;