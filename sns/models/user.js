const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNULL: true,
          unique: true,
        },
        nick: {
          type: Sequelize.STRING(15),
          allowNULL: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNULL: true,
        },
        provider: {
          type: Sequelize.STRING(10),
          allowNULL: false,
          defaultValue: "local",
        },
        snsID: {
          type: Sequelize.STRING(30),
          allowNULL: true,
        },
      },
      {
        sequelizem,
        timetamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
      foreignkey : 'followingId',
      as : "Followers",
      through:"Follow",
    });
    db.User.belongsToMany(db.User,{
      foreignkey: "followerId",
      as : "Followings",
      through: 'Follow'
    })
  }
};
