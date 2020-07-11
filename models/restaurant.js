
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
      // The email cannot be null, and must be a proper email before creation    
      restaurant: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false     
      }
    });

    Restaurant.associate = function(models) {
        Restaurant.belongsTo(models.User)
    }
  
    return Restaurant;
  };
  