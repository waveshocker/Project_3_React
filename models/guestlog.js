
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var GuestLog = sequelize.define("GuestLog", {
    // Username is for the diner; restaurant is the restaurant ID
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false     
    },    
    restaurant: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    checkoutAt: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false
    }
  });

  GuestLog.associate = function(models) {
    GuestLog.belongsTo(models.User);
    GuestLog.belongsTo(models.Restaurant)
  }

  return GuestLog;
};
