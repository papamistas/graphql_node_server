import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import faker from 'faker';
import lodash from 'lodash';
import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';
const config = './config/configKeys.json';



const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express ();
server.applyMiddleware({ app });

app.use(express.static('app/public'));

db.sequelize.sync().then(() => {
  // populate author table with dummy data
/*  db.author.bulkCreate(
    lodash.times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    })),
  );
  // populate post table with dummy data
  db.post.bulkCreate(
    lodash.times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: lodash.random(1, 10),
    })),
  );*/

  app.listen({ port: 7000 }, () =>
    console.log(`🚀 Server ready at http://localhost:7000${server.graphqlPath}`),
  );
});
var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy(config.fb,
    function(accessToken, refreshToken, profile, done) {
        /*User.findOrCreate(..., function(err, user) {
            if (err) { return done(err); }
            done(null, user);
        });*/
    }
));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
        failureRedirect: '/login' }));




var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(config["ggl"],
    function(accessToken, refreshToken, profile, cb) {
        var Users = require('./models/cliente')
        Users.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });

    }
));



// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });