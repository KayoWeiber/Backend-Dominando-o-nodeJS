module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123456789",
  database: "postgres",
  define:{
    timestamps: true, // cria duas colunas created_at e updated_at
    underscored: true ,//nomeclatura _ (não camelCase) customersGroup => customers_group
    underscoredAll: true,
  }
}
