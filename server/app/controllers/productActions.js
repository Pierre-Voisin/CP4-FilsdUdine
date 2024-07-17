const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const product = req.body;
  try {
    const insertId = await tables.product.create(product);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const product = await tables.product.readAll();
    res.json(product);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const product = await tables.product.read(req.params.id);

    if (product == null) {
      res.sendStatus(404);
    } else {
      res.json(product);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const product = { ...req.body, id: req.params.id };
  try {
    await tables.product.update(product);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.product.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };