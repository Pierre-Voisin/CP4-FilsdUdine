const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */


const userRouter = require("./user/router");
const roleRouter = require("./role/router");
const productRouter = require("./product/router");
const orderProductRouter = require("./orderProduct/router");
const orderRouter = require("./order/router");




router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/product", productRouter);
router.use("/orderProduct", orderProductRouter);
router.use("/order", orderRouter);

/* ************************************************************************* */

module.exports = router;
