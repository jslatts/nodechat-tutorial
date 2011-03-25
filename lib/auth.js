/*! 
 * Auth.js 
 *
 * Handles new user accounts and authentication
 */

/*
 * This will be a [CommonJS module](http://www.commonjs.org/) so we need to start off with some setup. 
 *
 * Here we are checking to see if this code is included as a module. If it is, we go ahead and include our dependencies (in this case, our models lib, redis, and hash + friends). If we are not a module, we may as well explode because the rest of the code won't run without redis and hash.
 */
(function () {
    if (typeof exports !== 'undefined') {
        redis = require('redis');
        rc = redis.createClient();
        models = require('../models/models');

        //joose is required to support the hash lib we are using
        require('joose');
        require('joosex-namespace-depended');
        require('hash');
    } 
    else {
        throw new Error('auth.js must be loaded as a module.');
    }

    /**
     * Checks to see if the user exists in redis. If it does, it calls verifyUserAccount(). Otherwise callback with an error.
     *
     * @param: {string} name
     * @param: {string} pass
     * @param: {function} fn
     * @api: public
     */
    exports.authenticateUser = function(name, pass, fn) {
        console.log('[authenticate] Starting auth for ' + name + ' with password ' + pass);
        
        var rKey = 'user:' + name;
        rc.get(rKey, function(err, data){
            if(err) return fn(new Error('[authenticateUser] SET failed for key: ' + rKey + ' for value: ' + name));

            if (!data) {
                fn(new Error('[authenticateUser] invalid password'));
            }
            else {
                console.log('[authenticateUser] user: ' + name + ' found in store. Verifying password.');
                verifyUserAccount(data, pass, fn)
            }
        });
    };

    /**
     * Steps through the process of retreiving the salt, calculating the hash of the passed in password, then comparing it to the stored hash in redis.
     *
     * If successful, create a new user model and pass it to the callback.
     *
     * Otherwise, any failure along the way means we callback with an error.
     * 
     * Assumes the passed in user exists in redis. 
     *
     * @param: {string} foundUserName
     * @param: {string} pass
     * @param: {function} fn
     * @api: private
     */
    var verifyUserAccount = function(foundUserName, pass, fn) {
        var rKey = 'user:' + foundUserName;

        rc.get(rKey + '.salt', function(err, data){
            if(err) return fn(new Error('[verifyUserAccount] GET failed for key: ' + rKey + '.salt')); 

            if(data) {
                var calculatedHash = Hash.sha512(data + '_' + pass);
                rc.get(rKey + '.hashPass', function(err, data) {
                    if(err) return fn(new Error('[verifyUserAccount] GET failed for key: ' + rKey + '.hashPass'));

                    if (calculatedHash === data) {
                        console.log('[verifyUserAccount] Auth succeeded for ' + foundUserName + ' with password ' + pass);

                        rc.get(rKey + '.profile', function(err, data) {
                            if(err) return fn(new Error('[verifyUserAccount] GET failed for key: ' + rKey + '.profile' + ' for user profile'));

                            var foundUser = new models.User();
                            foundUser.mport(data);
                            foundUser.set({'hashPass': calculatedHash});

                            return fn(null, foundUser);
                        });
                    }
                    else {
                        return fn(new Error('[verifyUserAccount] invalid password'));
                    }
                });
            }
            else {
                return fn(new Error('[verifyUserAccount] salt not found'));
            }
        });
    }

    /**
     * Verifies that the two passwords match, then use the current timestamp to salt a hash of the password. Store it all in a user model which we will save as a poor man's profile if everything succeeds.
     *
     * Any failure along the way means we callback with an error.
     * 
     * @param: {string} name
     * @param: {string} pass1
     * @param: {string} pass2
     * @param: {string} email
     * @param: {string} ponies
     * @param: {function} fn
     * @api: public
     */
    exports.createNewUserAccount = function(name, pass1, pass2, email, ponies, fn) {
        if (pass1 !== pass2) return fn(new Error('[createNewUserAccount] Passwords do not match'));

        var newUser = new models.User({name: name, email: email, ponies: ponies});

        var rKey = 'user:' + name;

        rc.set(rKey, name, function(err, data){
            if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + ' for value: ' + name));

            var salt = new Date().getTime();
            rc.set(rKey + '.salt', salt, function(err, data) {
                if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + '.salt' + ' for value: ' + salt));

                var hashPass = Hash.sha512(salt + '_' + pass1);
                rc.set(rKey + '.hashPass', hashPass, function(err, data) {
                    if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + '.hashPass' + ' for value: ' + hashPass));

                    rc.set(rKey + '.profile', newUser.xport(), function(err, data) {
                        if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + '.profile' + ' for user profile'));

                        newUser.set({'hashPass': hashPass});
                        return fn(null, newUser);
                    });

                }); 
            }); 
        }); 
    }
})()

