const { v4: uuidv4 } = require("uuid");

module.exports = {
  ADMIN_ROLE_ID: uuidv4(),
  MANAGER_ROLE_ID: uuidv4(),
  DEVELOPER_ROLE_ID: uuidv4(),
};
