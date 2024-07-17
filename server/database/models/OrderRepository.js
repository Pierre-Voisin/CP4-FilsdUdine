const AbstractRepository = require("./AbstractRepository");

class OrderRepository extends AbstractRepository {
  constructor() {
    super({ table: "order" });
  }

  async create(order) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (order_date, status, quantity, user_id) VALUES (?,?,?,?)`,
      [order.order_date, order.status, order.quantity, order.user_id]
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

  async update(order) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      order_date = ?,
      status = ?,
      quantity = ?,
      user_id = ?,
      WHERE id = ?`,
      [order.order_date, order.status, order.quantity, order.user_id, order.id]
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

module.exports = OrderRepository;