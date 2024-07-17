const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const role = req.body;
  try {
    const insertId = await tables.role.create(role);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const role = await tables.role.readAll();
    res.json(role);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const role = await tables.role.read(req.params.id);

    if (role == null) {
      res.sendStatus(404);
    } else {
      res.json(role);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const role = { ...req.body, id: req.params.id };
  try {
    await tables.role.update(role);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.role.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };