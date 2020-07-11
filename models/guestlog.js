
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var GuestLog = sequelize.define("GuestLog", {
    // The email cannot be null, and must be a proper email before creation    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false     
    },    
    restaurant: {
      type: DataTypes.STRING,
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
