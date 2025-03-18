'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contact', {
      id: {type:Sequelize.INTEGER,allownull:false,autoIncrement:true,primaryKey:true},
      name: {type:Sequelize.STRING,allownull:false},
      email: {type:Sequelize.STRING,allownull:false,unique:true},
      created_at: {type:Sequelize.DATE,allownull:false},
      updated_at: {type:Sequelize.DATE,allownull:false},
      customer_id:{type:Sequelize.INTEGER,references:{model:"customers",key:"id"},onUpdate:"CASCADE",onDelete:"CASCADE",allownull:false},
    });

  },

  async down (queryInterface) {
    await queryInterface.dropTable('contact');
  }
};
