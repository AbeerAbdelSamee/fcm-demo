var appServices = angular.module('starter.services', []);// Use for all service of application.
appServices.service('firebaseService',
    [ 
        '$q',
        function ($q) {
          
            
            return {
             /* start services  */
             firebaseLogin: function (callback) {
                window.FirebasePlugin.getToken(function(token){
                    callback(token);
                });
            },
            firebaseSubscribe: function (
                ) {
                    window.FirebasePlugin.onNotificationOpen(function(data){
                        // if(data.wasTapped){
                          //Notification was received on device tray and tapped by the user.
                          alert( JSON.stringify(data) );
                        // }else{
                        //   //Notification was received in foreground. Maybe the user needs to be notified.
                        //   alert( JSON.stringify(data) );
                        // }
                    });
            },
             /* end services  */

            };

        }
    ]);

