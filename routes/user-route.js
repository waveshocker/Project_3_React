// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/user/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea    
    res.json({
      username: req.user.username,
      id: req.user.id,
      email: req.user.email
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/user/signup", function(req, res) {    
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      address: req.body.address,
      isrestaurant: req.body.isrestaurant      
    })
      .then(function() {        
        res.redirect(307, "/api/user/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/user/checkin", function(req, res) {
    console.log(req.body.username);    
    db.GuestLog.create({
      username: req.body.username,
      restaurant: req.body.restaurant,  
      UserId: req.body.userid,
      RestaurantId: req.body.restaurantid
    })
    .then(function() {
      console.log("success");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
  });

  app.post("/api/user/createrest", function(req, res) {
    console.log(req.body.restaurant);    
    db.Restaurant.create({      
      restaurant: req.body.restaurant,
      UserId: req.body.id,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })
    .then(function() {        
      console.log("success");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
  });

  // Route for finding the closest restaurant

  app.get("/api/restaurant_search", function(req, res) {
    //require request pass in latitude and longitude
    console.log(req.query);
    db.Restaurant.findOne({
      attributes: ['id', 'restaurant', 'longitude', 'latitude',                  
                  [db.sequelize.literal("6371 * acos(cos(radians(" + req.query.latitude + 
                  ")) * cos(radians(latitude)) * cos(radians(" + req.query.longitude + 
                  ") - radians(longitude)) + sin(radians(" + req.query.latitude + 
                  ")) * sin(radians(latitude)))"),'distance']               
                  ],      
      order: db.sequelize.col('distance')
    })
      .then((result) => res.send(result))
      .catch((err) => {        
        return res.send(err)
      });
  });

  app.get("/api/log_pull", function(req, res) {
    console.log(req.query);
    db.GuestLog.findAll({
      where: {
        restaurant: req.query.restaurant,        
      },
      include: [{model: db.User}, 
        {model: db.Restaurant,
        where: {
          UserId: req.query.id
        }}]      
    })
    .then((result) => (res.send(result)))
    .catch((err) => {
      console.log('There was an error querying restaurant', JSON.stringify(err))
      return res.send(err)
    });
  })


  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

};
