"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Users", "resetPasswordToken", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Users", "resetPasswordExpires", {
        type: Sequelize.DATE
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
