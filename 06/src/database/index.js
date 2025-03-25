import Sequelize  from "sequelize";

import config from "../config/database";

import User from "../app/models/User";
import Contact from "../app/models/Contact";
import Customer from "../app/models/Customer";



const models=[Customer,User,Contact];

class Database {
  constructor() {
    this.connection = new Sequelize(config)
    this.init();
    
  }
  init(){
    models.forEach(model=>model.init(this.connection));

  }
}

export default new Database();
