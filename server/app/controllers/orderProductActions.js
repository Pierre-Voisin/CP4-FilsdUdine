const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const orderProduct = req.body;
  try {
    const insertId = await tables.orderProduct.create(orderProduct);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const orderProduct = await tables.orderProduct.readAll();
    res.json(orderProduct);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const orderProduct = await tables.orderProduct.read(req.params.id);

    if (orderProduct == null) {
      res.sendStatus(404);
    } else {
      res.json(orderProduct);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const orderProduct = { ...req.body, id: req.params.id };
  try {
    await tables.order.update(orderProduct);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.orderProduct.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };