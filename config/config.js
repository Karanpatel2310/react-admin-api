let config = function () { };

config.SITE_URL = 'http://localhost:4200';

config.MAIL_API_USER = process.env.MAIL_API_USER;
config.MAIL_API_KEY = process.env.MAIL_API_KEY;

config.SECRET = process.env.SECRET;
config.expireTokenIn = 60 * 30; //token will expire after half n hour
config.URL='http://192.168.1.104:4200/forgotpassword/';
config.SALT=8;

config.credentials = {
  accessHost: process.env.config_ACCESS_HOST,
  accessKey: process.env.config_ACCESS_KEY,
  sharedSecret: process.env.config_SHARED_SECRET,
  region: process.env.REGION
}

export default config;
