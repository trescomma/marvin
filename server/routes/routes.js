const helpers = require('../helpers/helpers');

module.exports = function(app, express) {

  /* Database Routes */
  // This route will handle all database queries for reminders
  app.post('/api/user/events', function(req, res){
    res.send(200);
  });

  // This route will handle all database queries for reminders
  app.post('/api/user/reminders', function(req, res){
    res.send(200);
  });

  // This route will handle all database queries for interests
  app.post('/api/user/interests', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for events
  app.post('/api/events', function(req, res){
    res.send(200);
  });

  /* API Routes  */

  app.post('/api/eventbrite', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for yelp
  // Pass a type as part of request
  // Example "restaurants", "bars", "clubs" etc
  app.post('/api/yelp', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for meetup
  app.post('/api/meetup', function(req, res){
    res.send(200);
  });

  // This route will handle all API queries for the weather component
  app.post('/api/weather', function(req, res){
    res.send(200);
  });

  // This route will handle all Google APIs
  app.post('/api/google', function(req, res){
    res.send(200);
  });

    // This route will handle all API queries for the fitbit/wellness component
  app.post('/api/fitbit', function(req, res){
    res.send(200);
  });


}