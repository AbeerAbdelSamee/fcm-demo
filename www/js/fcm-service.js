var appServices = angular.module('starter.services', []);// Use for all service of application.
appServices.service('fcmService',
    [
        '$q',
        function ($q) {
          
            
            return {
             /* start services  */
             fcmLogin: function (callback) {
                FCMPlugin.getToken(function(token){
                    callback(token);
                });
            },
            fcmSubscribe: function (
                ) {
                    FCMPlugin.onNotification(function(data){
                        if(data.wasTapped){
                          //Notification was received on device tray and tapped by the user.
                          alert( JSON.stringify(data) );
                        }else{
                          //Notification was received in foreground. Maybe the user needs to be notified.
                          alert( JSON.stringify(data) );
                        }
                    });
            },
             /* end services  */

            };

        }
    ]);

