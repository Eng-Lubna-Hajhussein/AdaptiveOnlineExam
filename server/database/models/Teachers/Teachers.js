module.exports = (sequelize, DataTypes) => {
  const Teachers = sequelize.define("Teachers", {
    teacherID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
    },
    fullname: {
      type: DataTypes.STRING(255),
    },
    password: {
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(255),
    },
  });
  return Teachers;
};
