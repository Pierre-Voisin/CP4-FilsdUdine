const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (lastname, firstname, email, password, adress, zipcode, city, role_id) VALUES (?,?,?,?,?,?,?,?)`,
      [user.lastname, user.firstname, user.email, user.password, user.adress, user.zipcode, user.city, user.role_id]
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

  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      lastname = ?,
      firstname = ?,
      email = ?,
      password = ?,
      adress = ?,
      zipcode = ?,
      city = ?,
      role_id =?,
      WHERE id = ?`,
      [user.lastname, user.firstname, user.email, user.passwword, user.adress, user.zipcode, user.city, user.role_id, user.id]
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

module.exports = UserRepository;