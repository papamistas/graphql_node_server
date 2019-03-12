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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



/*const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated')
    } else {
        return next()
    }
}*/
passport.serializeUser(function(user, done) {
    console.log('serializing user: ', user);
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('serializing user: ', user);
    done(null, user);
});

var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy(config.fb,
    function (accessToken, refreshToken, profile, done) {
        var User = db.sequelize.import('./models/cliente.js')

        User.findOrCreate({where: {fb_id: profile.id}, defaults: {cliente: profile.displayName}})
            .then(function (user, err) {
                done(JSON.stringify(user[0].dataValues), err);
            }).catch(done);
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
        User.findOrCreate({where: {google_id: profile.id}, defaults: {cliente: profile.displayName}}).then( function (user, err) {
            cb(JSON.stringify(user[0].dataValues), err);
        }).catch(function (err) {
            console.log(err)
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
                     done(JSON.stringify(user.dataValues), null);
                }
            }).catch(done);
        }

));

/*app.post('/auth/login', function(req, res){
    console.log("body parsing", req.body);
    //should be something like: {username: YOURUSERNAME, password: YOURPASSWORD}
});*/


app.post('/auth/login',
    passport.authenticate('local'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username)
    }
);
app.get('/auth/google',
    passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']}));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' ,successRedirectRedirect: '/'}),
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