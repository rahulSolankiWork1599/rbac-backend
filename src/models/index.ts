// Initializes all models & associations
import { User } from "@models/user.model";
import { Role } from "@models/role.model";
import { Project } from "@models/project.model";
import { RefreshToken } from "@models/refreshToken.model";

import { setupAssociations } from "./associations";

setupAssociations(); // ✅ Register all model relationships

export { User, Role, Project, RefreshToken };
