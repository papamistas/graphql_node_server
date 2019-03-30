import config from "./config/configKeys";
import db from "./models";

const requestHandler=(app,passport,checkAuth,cors)=>{

    let Strategy = require('passport-facebook').Strategy;
    passport.use(new Strategy(config.fb,
        function(accessToken, refreshToken, profile, cb) {
            // In this example, the user's Facebook profile is supplied as the user
            // record.  In a production-quality application, the Facebook profile should
            // be associated with a user record in the application's database, which
            // allows for account linking and authentication with other identity
            // providers.
            var User = db.sequelize.import('./models/cliente.js')

            User.findOrCreate({where: {fb_id: profile.id}, defaults: {cliente: profile.displayName}})
                .then(function (user) {
                    return cb(null, user);
                })

        }));


    let GoogleStrategy = require('passport-google-oauth20').Strategy;

    passport.use(new GoogleStrategy(config["ggl"],
        function (accessToken, refreshToken, profile, cb) {

            var User = db.sequelize.import('./models/cliente.js')
            User.findOrCreate({where: {google_id: profile.id}, defaults: {cliente: profile.displayName}}).then( function (user, err) {
                return cb(null, user);
            });
        }
    ));

    let LocalStrategy = require('passport-local').Strategy;

    passport.use(new LocalStrategy(

        function(username, password, done) {
            var User = db.sequelize.import('./models/cliente.js')
            User.findOne({where: {"email": username}}).then(function (user, err) {
                {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false, {message: 'Incorrect username.'});
                    }
                    /*if (!user.validPassword(password)) {
                        return done(null, false, {message: 'Incorrect password.'});
                    }*/
                    done(null,user);
                }
            });
        }

    ));
    app.options("/*", function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send(200);
    });

    app.get('/auth/facebook',passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/auth/test',
            failureRedirect: '/login'
        }),function(req, res) {
            // Successful authentication, redirect home.
            //res.redirect('/');
            //res.send({ hello: 'world' });
            res.status(404).end();
        });

    app.post('/auth/login', passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }),function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });




    app.get('/auth/google',
        passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']}));

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/' ,successRedirect: '/auth/test'}),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });
    app.get('/auth/login', function () {
            console.log('redirected to login again')
        }
    );
    app.get('/auth/test',checkAuth, function (req,res) {
            res.send('redirected to test again')
        //res.redirect('/about')
        }
    );
    app.get('/auth/logout', function (req, res) {
        req.logout();
        req.session = null
        //req.session.destroy();
        return res.redirect('/');
    });
}

module.exports={handler:requestHandler};