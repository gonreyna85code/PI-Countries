const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      cca3: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      flags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      population: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      continents: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
