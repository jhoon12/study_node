"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  let post = sequelize.define('post', {
    title : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    writer:{
      type: DataTypes.STRING,
      allowNUll: false,
    }
  })
  return post;
};
