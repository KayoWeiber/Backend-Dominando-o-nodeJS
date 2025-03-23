'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {type:Sequelize.INTEGER,allownull:false,autoIncrement:true,primaryKey:true},
      name: {type:Sequelize.STRING,allownull:false},
      email: {type:Sequelize.STRING,allownull:false,unique:true},
      password_hash: {type:Sequelize.STRING,allownull:false},
      provider: {type:Sequelize.BOOLEAN,default:false,allownull:false},
      created_at: {type:Sequelize.DATE,allownull:false},
      updated_at: {type:Sequelize.DATE,allownull:false},

    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
