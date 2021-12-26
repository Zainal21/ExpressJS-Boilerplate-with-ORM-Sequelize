'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // bcrypt.hash('admin123', 10).then((data) => {
    //     let passwordDefault = data
    //   })
      await queryInterface.bulkInsert('users', [{
        user_name:'admin',
        user_phone:'090118291',
        user_email: 'admin@admin.com',
        password: await bcrypt.hash('admin123', bcrypt.genSaltSync(8)),
        date_registration: new Date(),
        is_active : 1,
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
