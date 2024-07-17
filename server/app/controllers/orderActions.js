const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const order = req.body;
  try {
    const insertId = await tables.order.create(order);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const order = await tables.order.readAll();
    res.json(order);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const order = await tables.order.read(req.params.id);

    if (order == null) {
      res.sendStatus(404);
    } else {
      res.json(order);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const order = { ...req.body, id: req.params.id };
  try {
    await tables.order.update(order);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.order.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };