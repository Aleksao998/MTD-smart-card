const express = require("express");
const ordersController = require("../controllers/orders");
const router = express.Router();

const isAuth = require("../middleware/is-auth");

//post /order/createOrder
router.post("/createOrder", ordersController.createOrder);

//GETALL /order/orders
router.get("/orders", ordersController.getAllOrders);

//DELETE /order/deleteOrder
router.post("/deleteOrder", isAuth, ordersController.deleteOrder);

//UPDATE  /order/updateOrder
router.post("/updateOrder/:id", isAuth, ordersController.updateOrder);

module.exports = router;
