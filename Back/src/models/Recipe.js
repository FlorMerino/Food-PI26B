const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(input){
        this.setDataValue('name', input.toLowerCase());
      },
      get(){
        let input = this.getDataValue('name');
        let output = input[0].toUpperCase()+input.slice(1);
        return output;
      }
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.DECIMAL,
      defaultValue: 0
    },
    image: {
      type: DataTypes.TEXT,
      allowNull:false,
  
    },
    steps: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
  },{
    timestamps : false
  });
};
