const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const category = req.body;
  try {
    const insertId = await tables.category.create(category);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const category = await tables.category.readAll();
    res.json(category);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const category = await tables.category.read(req.params.id);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const category = { ...req.body, id: req.params.id };
  try {
    await tables.category.update(category);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.category.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };