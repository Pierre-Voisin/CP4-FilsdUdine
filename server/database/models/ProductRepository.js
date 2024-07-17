const AbstractRepository = require("./AbstractRepository");

class ProductRepository extends AbstractRepository {
  constructor() {
    super({ table: "product" });
  }

  async create(product) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, image, prix, stock, category_id) VALUES (?,?,?,?,?,?)`,
      [product.name, product.description, product.image, product.prix, product.stock, product.category_id]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(product) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      name = ?,
      description = ?,
      image = ?,
      prix = ?,
      stock = ?,
      category_id = ?,
      WHERE id = ?`,
      [product.name, product.description, product.image, product.stock, product.category_id, product.id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ProductRepository;