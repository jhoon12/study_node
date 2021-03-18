module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "boardData",
    {
      todo: {
        type: DataTypes.STRING(20),
        allowNULL: false,
      },
      todoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
    );
