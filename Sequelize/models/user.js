import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

 export const userModel = (sequelize) => {
  return sequelize.define("User", {
    user: {
      type: DataTypes.TEXT, 
    },
    name: {
      type: DataTypes.TEXT, 
    },
  });
};