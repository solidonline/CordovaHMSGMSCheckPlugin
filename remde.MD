# Welcome to com-huawei-cordovahmsgmscheckplugin!

this plugin is for indetify if is available Google services o Huawei Services.
Based on https://github.com/salmanyaqoob/Cordova-All-HMS-Kits/tree/master/CordovaHMSPlugin/CordovaHMSGMSCheckPlugin

# Install

    cordova plugin add com-huawei-cordovahmsgmscheckplugin
    cordova plugin add https://github.com/horaas/CordovaHMSGMSCheckPlugin.git

## Use



    CordovaHMSGMSCheckPlugin.isGmsAvailable(function (response) {
            console.info(response)
        },
        function (error) {
            console.error(error);
        });

    CordovaHMSGMSCheckPlugin.isHmsAvailable(function (response) {
            console.info(response)
        },
        function (error) {
            console.error(error);
        });