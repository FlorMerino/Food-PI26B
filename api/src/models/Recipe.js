const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,  //para no pisar con el id de las recetas de la api
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishSummary:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
      validate: {   //numeros solo entre 0 y 10
        min: 0,                  
        max: 10
      }
    },
    stepBystep:{
      type: DataTypes.TEXT
    }
  }, 
  {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
  );
};
