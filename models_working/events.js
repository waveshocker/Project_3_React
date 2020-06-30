// Creating our Event model
// An Event is created when 
module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("User", {
    diner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurant: {
      type: DataTypes.STRING,
      allowNull: false
    },
    checkin: {
      type: DataTypes.TIMESTAMP,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    checkout: {
      type: DataTypes.TIMESTAMP,
      allowNull: false
    },

    // How the event was checked in. User can check in, restaurant can check in a user (?), or the event can be manually created
    checkinMethod: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Same deal as with checkinMethod. User can check out, restaurant can check out a user, the event can be manually entered, or
    // the user could be automatically checked out (after say 3 hours).
    checkoutMethod: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Events;
};
