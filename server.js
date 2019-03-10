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

app.use(express.static('app/public'));
app.use(bodyParser.json())

app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.listen({port: 7000}, () =>
    console.log(`🚀 Server ready at http://localhost:7000${server.graphqlPath}`),
);
/*const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated')
    } else {
        return next()
    }
}*/

var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy(config.fb,
    function (accessToken, refreshToken, profile, done) {
        var User = db.sequelize.import('./models/cliente.js')

        User.findOrCreate({where: {fb_id: profile.id}, defaults: {cliente: profile.displayName}})
            .then(function (err, user) {
                return done(err, user);
            });
    }
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(config["ggl"],
    function (accessToken, refreshToken, profile, cb) {

        var User = db.sequelize.import('./models/cliente.js')
        User.findOrCreate({
            where: {google_id: profile.id},
            defaults: {cliente: profile.displayName}
        }, function (err, user) {
            return cb(err, user);
        });

    }
));

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(

        function(username, password, done) {
            var User = db.sequelize.import('./models/cliente.js')
            User.findOne({email: username}, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Incorrect username.'});
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                return done(null, user);
            });
        }

));




app.post('/auth/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);
app.get('/auth/google',
    passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']}));

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

app.get('/login', function () {
    console.log('redirected to login again')
    }
);