
    var _registration = null;
    var AUTH = null;
    
        function notify() {
            registerServiceWorker();
            if(AUTH) {
                setInterval(askPermission(), 1000*60*30);
            }
        }
        function registerServiceWorker() {
            return navigator.serviceWorker.register('service-worker.js')
                .then(function(registration) {
                    console.log('Registrando no Service worker com sucesso.');
                    _registration = registration;
                    AUTH = 'skDiVgbx2VlUtRXkD4Keom1ec1xt801GFsDd8qdYiTs';
                    askPermission();
                    return registration;
                })
                .catch(function(err) {
                    console.error('Falha ao registrar no service worker.', err);
                });
        }
    
        function askPermission() {
            return new Promise(function(resolve, reject) {
                    const permissionResult = Notification.requestPermission(function(result) {
                        resolve(result);
                    });
    
                    if (permissionResult) {
                        permissionResult.then(resolve, reject);
                    }
                })
                .then(function(permissionResult) {
                    if (permissionResult !== 'granted') {
                        throw new Error('We weren\'t granted permission.');
                    } else {
                        subscribeUserToPush();
                    }
                });
        }
    
        function urlBase64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');
    
            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);
    
            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }
    
        function getSWRegistration() {
            var promise = new Promise(function(resolve, reject) {
                // do a thing, possibly async, then…
    
                if (_registration != null) {
                    resolve(_registration);
                } else {
                    reject(Error("It broke"));
                }
            });
            return promise;
        }
    
        function subscribeUserToPush() {
            getSWRegistration()
                .then(function(registration) {
                    console.log(registration);
                    const subscribeOptions = {
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array('BO3IgDdxxI2q1t2S8bK-NM5g5l8WMJxgDdrC_TB2UN6Ngd5b1T10X3zdQPxiQezWES7SSXXTsg2tJY_h0kc6KFA')
                    };
    
                    return registration.pushManager.subscribe(subscribeOptions);
                })
                .then(function(pushSubscription) {
                    console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
                    // sendSubscriptionToBackEnd(pushSubscription);
                    return pushSubscription;
                });
        }

        var sendSubscriptionToBackEnd = function(subscription) {
            console.log(JSON.stringify(subscription))
        }

function SubScribe(){
    notify()
}
