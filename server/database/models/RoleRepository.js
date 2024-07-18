const AbstractRepository = require("./AbstractRepository");

class RoleRepository extends AbstractRepository {
  constructor() {
    super({ table: "role" });
  }

  async create(role) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name ) VALUES (?)`,
      [role.name]
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

  async update(role) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      name = ?,
      
     WHERE id = ?`,
      [role.name, role.id]
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

module.exports = RoleRepository;