
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
      // The email cannot be null, and must be a proper email before creation    
      // This field is for the restaurant name.
      restaurant: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false     
      },
      longitude: {
          type: DataTypes.FLOAT(12, 10),
          allowNull: false
      },
      latitude: {
        type: DataTypes.FLOAT(12, 10),
        allowNull: false
      }
    });

    Restaurant.associate = function(models) {
        Restaurant.belongsTo(models.User)
    }
  
    return Restaurant;
  };
  