// Handles new user accounts and authentication
//
// Copyright(c) 2011 Justin Slattery <justin.slattery@fzysqr.com> 
//
// MIT Licensed

// This will be a [CommonJS module](http://www.commonjs.org/) so we need to start off with some setup. 
//
// Here we are checking to see if this code is included as a module. If it is, we go ahead and include our dependencies (in this case, our models lib, redis, and hash + friends). If we are not a module, we may as well explode because the rest of the code won't run without redis and hash.
(function () {
    if (typeof exports !== 'undefined') {
        redis = require('redis');
        rc = redis.createClient();
        models = require('../models/models');

        var bcrypt = require('bcrypt');

        //logging
        winston = require('winston');
    } 
    else {
        throw new Error('auth.js must be loaded as a module.');
    }

    // Checks to see if the user exists in redis. If it does, it calls verifyUserAccount(). Otherwise callback with an error.
    // 
    // - @param: {string} name
    // - @param: {string} pass
    // - @param: {function} fn
    // - @api: public
    exports.authenticateUser = function(name, pass, fn) {
        winston.info('[authenticate] Starting auth for ' + name + ' with password ' + pass);
        
        var rKey = 'user:' + name;
        rc.get(rKey, function(err, data){
            if(err) return fn(new Error('[authenticateUser] GET failed for key: ' + rKey + ' for value: ' + name));

            if (!data) {
                fn(new Error('[authenticateUser] user: ' + name + ' not found in store.'));
            }
            else {
                winston.info('[authenticateUser] user: ' + name + ' found in store. Verifying password.');
                verifyUserAccount(data, pass, fn)
            }
        });
    };

    // Checks to see if the user specified matches the hash specified
    // 
    // - @param: {string} name
    // - @param: {string} hash
    // - @param: {function} fn
    // - @api: public
    exports.authenticateUserByHash = function(name, hash, fn) {
        winston.info('[authenticateUserByHash] Starting hash auth for ' + name + ' with hash ' + hash);
        
        var rKey = 'user:' + name;
        rc.get(rKey, function(err, data){
            if(err) return fn(new Error('[authenticateUserByHash] GET failed for key: ' + rKey + ' for value: ' + name));

            if (!data) {
                fn(new Error('[authenticateUserByHash] user: ' + name + ' not found in store.'));
            }
            else {
                winston.info('[authenticateUserByHash] user: ' + name + ' found in store. Verifying password.');

                rc.get(rKey + '.hashPass', function(err, data) {
                    if(err) {
                        return fn(new Error('[authenticateUserByHash] GET failed for key: ' + rKey + ' for value: ' + name));
                    }
                    if(!data) {
                        return fn(new Error('[authenticateUserByHash] hash did not much for user: ' + name));
                    }
                    else {
                        winston.info('[authenticateUserByHash] user: ' + name + ' hash verified. Authenticated.');

                        return fn(null, true);
                    }
                });
            }
        });
    };

    // Steps through the process of retreiving the hashed password and comparing to the attempted password.
    //
    // If successful, create a new user model and pass it to the callback. Otherwise, any failure along the way means we callback with an error.
    // 
    // Assumes the passed in user exists in redis. 
    //
    // - @param: {string} foundUserName
    // - @param: {string} pass
    // - @param: {function} fn
    // - @api: private
    var verifyUserAccount = function(foundUserName, pass, fn) {
      var rKey = 'user:' + foundUserName;

      rc.get(rKey + '.hashPass', function(err, hashPass) {
        if(err) { return fn(new Error('[verifyUserAccount] GET failed for key: ' + rKey + '.hashPass')); }

        bcrypt.compare(pass, hashPass, function(err, res) {
          if(err) { return fn(new Error('[bcrypt.compare] failed with error: ' + err )); }

          if (res === true) {
            winston.info('[verifyUserAccount] Auth succeeded for ' + foundUserName + ' with password ' + pass);

            rc.get(rKey + '.profile', function(err, data) {
              if(err) return fn(new Error('[verifyUserAccount] GET failed for key: ' + rKey + '.profile' + ' for user profile'));

              winston.info('[verifyUserAccount] profile returned ' + data);

              var foundUser = JSON.parse(data);
              foundUser.hashPass = hashPass;

              winston.info('[verifyUserAccount] sending back ' + JSON.stringify(foundUser));
              return fn(null, foundUser);
            });
          }
          else {
            return fn(new Error('[verifyUserAccount] invalid password'));
          }
        });
      });
    }

    // Verifies that the two passwords match, then uses bcrypt to hash and store the password. Store it all in a user model which we will save as a poor man's profile if everything succeeds.
    //
    // Any failure along the way means we callback with an error.
    //
    // - @param: {string} name
    // - @param: {string} pass1
    // - @param: {string} pass2
    // - @param: {string} email
    // - @param: {function} fn
    // - @api: public
    exports.createNewUserAccount = function(name, pass, email, fn) {
      var newUser = {name: name, email: email };

      var rKey = 'user:' + name;

      rc.get(rKey, function (err, data) {
        if (err) {
          return fn(new Error('[createNewUserAccount] GET failed for key: ' + rKey + ' for value: ' + name));
        }

        if (data) {
          return fn(new Error('[createNewUserAccount] user already exists'));
        }
        else {
          rc.set(rKey, name, function(err, data){
            if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + ' for value: ' + name));

            bcrypt.gen_salt(10, function(err, salt) {
              bcrypt.encrypt(pass, salt, function(err, hashPass) {

                rc.set(rKey + '.hashPass', hashPass, function(err, data) {
                  if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + '.hashPass' + ' for value: ' + hashPass));

                  rc.set(rKey + '.profile', JSON.stringify(newUser), function(err, data) {
                    if(err) return fn(new Error('[createNewUserAccount] SET failed for key: ' + rKey + '.profile' + ' for user profile'));

                    newUser.hashPass = hashPass;
                    winston.info('sending back ' + JSON.stringify(newUser));
                    return fn(null, newUser);
                  });
                }); 
              }); 
            }); 
          }); 
        }
      });
    }
})()

