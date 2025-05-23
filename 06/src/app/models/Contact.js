import Sequelize,{Model}  from "sequelize";

class Contact extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      status: Sequelize.ENUM('active','inactive'),
    },{
      sequelize,
    });
  }
  static associate(models){
    this.belongsTo(models.Customer,{foreignKey:"customer_id"});
  }
}

export default Contact;
