import { DataTypes, Model } from "sequelize";
import { sequelize } from "@config/database";
import { User } from "@models/user.model";

export class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Project",
    tableName: "projects",
    timestamps: true,
  }
);

// Association added directly
Project.belongsToMany(User, {
  through: "user_projects",
  foreignKey: "project_id",
  otherKey: "user_id",
});
