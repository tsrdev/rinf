/**
 * @class user
 * Extends the default user model
 * Created by Alex <dtk077@gmail.com> on 5/13/2014-12:25 PM.
 * @namespace app.models
 */
var app = require('../app'),
loopback = require('loopback'),
user = app.models.user;

/**
 * Enable user email verification
 * @type {boolean}
 */
user.requireEmailVerfication = true;

/**
 * create.afterRemote hook
 * Configures and sends the verification email
 */
user.afterRemote('create', function (ctx, user, next) {
  'use strict';
  var options = {
    type: 'email',
    to: user.email,
    from: 'noreply@rinf.dtk.me',
    host: 'rinf.dtk.me/api',
    subject: 'Acct. verification',
    text: 'Please verify your account.',
    redirect: '/'
  };

  user.verify(options, next);
  next();
});
