module.exports = (sequelize, DataTypes) => {
  const KPIs = sequelize.define("KPIs", {
    kpiID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    grade: {
      type: DataTypes.STRING(255),
    },
    skill: {
      type: DataTypes.STRING(255),
    },
    kpiNumber: {
      type: DataTypes.STRING(255),
    },
    level: {
      type: DataTypes.STRING(255),
    },
    standardText: {
      type: DataTypes.STRING(255),
    },
    adaptiveIndex:{
      type: DataTypes.INTEGER,
    }
  });
  return KPIs;
};