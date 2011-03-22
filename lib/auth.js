/* Auth.js 
 *
 * Handles new user accounts and authentication
 *
 */

(function () {
    if (typeof exports !== 'undefined') {
        auth = exports;
        redis = require('redis');
        rc = redis.createClient();

        //joose is required to support the hash lib we are using
        require('joose');
        require('joosex-namespace-depended');
        require('hash');
    } 
    else {
        auth = this.auth = {};
    }

    auth.authenticateUser = function(name, pass, fn) {
        console.log('[authenticate] Starting auth for ' + name + ' with password ' + pass);
        
        var rKey = 'user:' + name;
        rc.get(rKey, function(err, data){
            if(err) return fn(new Error('[authenticate] SET failed for key: ' + rKey + ' for value: ' + name));

            if (!data) {
                console.log('[authenticate] user: ' + name + ' not found in store. Creating new user.');
                auth.createNewUserAccount(name, pass, fn);
            }
            else {
                console.log('[authenticate] user: ' + name + ' found in store. Verifying password.');
                auth.verifyUserAccount(data, pass, fn)
            }
        });
    };

    auth.verifyUserAccount = function(foundUserName, pass, fn) {
        var rKey = 'user:' + foundUserName;

        var user = {};
        user.name = foundUserName;

        rc.get(rKey + '.salt', function(err, data){
            if(err) return fn(new Error('[authenticate] GET failed for key: ' + rKey + '.salt')); 

            var calculatedHash = Hash.sha512(data + '_' + pass);
            rc.get(rKey + '.hashPass', function(err, data) {
                if(err) return fn(new Error('[authenticate] GET failed for key: ' + rKey + '.hashPass'));

                if (calculatedHash === data) {
                    user.hashPass = calculatedHash;
                    console.log('[authenticate] Auth succeeded for ' + foundUserName + ' with password ' + pass);
                    return fn(null, user);
                }

                fn(new Error('invalid password'));
            });
        });
    }

    auth.createNewUserAccount = function(name, pass, fn) {
        var rKey = 'user:' + name;

        rc.set(rKey, name, function(err, data){
            if(err) return fn(new Error('[authenticate] SET failed for key: ' + rKey + ' for value: ' + name));

            var salt = new Date().getTime();
            rc.set(rKey + '.salt', salt, function(err, data) {
                if(err) return fn(new Error('[authenticate] SET failed for key: ' + rKey + '.salt' + ' for value: ' + salt));

                var hashPass = Hash.sha512(salt + '_' + pass);
                rc.set(rKey + '.hashPass', hashPass, function(err, data) {
                    if(err) return fn(new Error('[authenticate] SET failed for key: ' + rKey + '.hashPass' + ' for value: ' + hashPass));

                    var user = {};
                    user.name = name;
                    user.hashPass = hashPass;
                    return fn(null, user);
                }); 
            }); 
        }); 
    }
})()

