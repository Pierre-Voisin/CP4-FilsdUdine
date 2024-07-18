const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */


const userRouter = require("./user/router");

router.use("/user", userRouter);

const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const productRouter = require("./product/router");

router.use("/product", productRouter);

const orderProductRouter = require("./orderProduct/router");

router.use("/orderProduct", orderProductRouter);

const orderRouter = require("./order/router");

router.use("/order", orderRouter);









/* ************************************************************************* */

module.exports = router;
