import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import faker from 'faker';
import lodash from 'lodash';
import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';
import config from './config/configKeys';

const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: {db}
});

const app = express();
server.applyMiddleware({app});

app.use(express.static('app/dist'));
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

function checkAuth(req, res, next) {
    if (!req.session.user) {
        res.send('You are not authorized to view this page');
    } else {
        next();
    }
}

var Strategy = require('passport-facebook').Strategy;
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


var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(config["ggl"],
    function (accessToken, refreshToken, profile, cb) {

        var User = db.sequelize.import('./models/cliente.js')
        User.findOrCreate({where: {google_id: profile.id}, defaults: {cliente: profile.displayName}}).then( function (user, err) {
            return cb(null, user);
        });
    }
));

var LocalStrategy = require('passport-local').Strategy;

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


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/about',
        failureRedirect: '/login'
    }));

app.post('/auth/login', passport.authenticate('local', { successRedirect: '/about',
    failureRedirect: '/login' }));

app.get('/auth/google',
    passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']}));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' ,successRedirect: '/about'}),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });
app.get('/login', function () {
        console.log('redirected to login again')
    }
);

app.listen({port: 7000}, () =>
    console.log(`🚀 Server ready at http://localhost:7000${server.graphqlPath}`),
);