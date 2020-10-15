var exec = require("cordova/exec");

var CordovaHMSGMSCheckPlugin = {}

CordovaHMSGMSCheckPlugin.isHmsAvailable = function (success, error, arg0) {
  exec(success, error, "CordovaHMSGMSCheckPlugin", "isHmsAvailable", [arg0]);
};

CordovaHMSGMSCheckPlugin.isGmsAvailable = function (success, error, arg0) {
  exec(success, error, "CordovaHMSGMSCheckPlugin", "isGmsAvailable", [arg0]);
};

module.exports = CordovaHMSGMSCheckPlugin