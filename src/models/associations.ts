import { User } from "@models/user.model";
import { Project } from "@models/project.model";

export const setupAssociations = () => {
  User.belongsToMany(Project, {
    through: "user_projects",
    foreignKey: "user_id",
    otherKey: "project_id",
  });

  Project.belongsToMany(User, {
    through: "user_projects",
    foreignKey: "project_id",
    otherKey: "user_id",
  });

  // Add other associations here as needed
  console.log("✅ All Associations synchronized.");
};
