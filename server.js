import express from 'express';

import {ApolloServer, gql} from 'apollo-server-express';
import faker from 'faker';
import lodash from 'lodash';
import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';

const cors = require('cors');
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport');
const bcrypt= require('bcrypt');
const routes=require('./routes');
//,senha:bcrypt(password)
//bcrypt.compare(passwoed,user.senha)

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: {db}
});

const app = express();
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

server.applyMiddleware({app});
//app.use(routes);
//app.use(express.static('app/dist'));

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

function checkAuth(req, res, next) {
    if (!req.session.passport) {
        res.send('You are not authorized to view this page');
    } else {
        next();
    }
}



passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.listen({port: 7000}, () =>
    routes.handler(app,passport,checkAuth,cors)
    //console.log(`🚀 Server ready at http://localhost:7000${server.graphqlPath}`),
);
