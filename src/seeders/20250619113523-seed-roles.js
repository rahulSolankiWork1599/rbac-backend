'use strict';

const { ADMIN_ROLE_ID, MANAGER_ROLE_ID, DEVELOPER_ROLE_ID } = require('./data/roles');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert("roles", [
      {
        id: ADMIN_ROLE_ID,
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: MANAGER_ROLE_ID,
        name: "Manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: DEVELOPER_ROLE_ID,
        name: "Developer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", {
      id: [ADMIN_ROLE_ID, MANAGER_ROLE_ID, DEVELOPER_ROLE_ID],
    });
  }
};
