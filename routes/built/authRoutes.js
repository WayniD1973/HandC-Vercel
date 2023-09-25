const express = require('express');
const router = express.Router();
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

passport.use('oauth', new OAuth2Strategy({
    authorizationURL: 'http://login-finished.wumpus-dev.repl.co/authorize',
    tokenURL: 'http://login-finished.wumpus-dev.repl.co/token',
    clientID: process.env['H&C_AUTH_CLIENT_ID'],
    clientSecret: process.env['H&C_AUTH_CLIENT_ID'],
    callbackURL: 'http://h-and-c.co.uk/auth/provider/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    // Here you would look up the user in your database, based on the profile data from the OAuth provider.
    // In this example, we'll just pass through the profile data.
    cb(null, profile);
  }
));

router.use((req, res, next) => {
	console.log("[H&C Server #1] [Request] Request At ", Date.now());
  next()
}) 

router.get('/provider',
  passport.authenticate('oauth'));

router.get('/provider/callback', 
  passport.authenticate('oauth', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router