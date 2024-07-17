const AbstractRepository = require("./AbstractRepository");

class OrderProductRepository extends AbstractRepository {
  constructor() {
    super({ table: "orderProduct" });
  }

  async create(orderProduct) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (order_, status, quantity) VALUES (?,?)`,
      [orderProduct.order_id, orderProduct.product_id]
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

  async update(orderProduct) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      order_id = ?,
      product_id = ?,
      WHERE id = ?`,
      [orderProduct.product_id, orderProduct.order_id, orderProduct.id]
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

module.exports = OrderProductRepository;