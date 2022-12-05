const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

const isAuth = require("../middleware/is-auth");

//PUT /admin/signup
router.put("/signup", isAuth, adminController.signup);

//GET /admin/get
router.get("/get", adminController.getAllAdmins);

//POST /admin/login
router.post("/login", adminController.login);

//DELETE /admin/deleteAdmin
router.post("/deleteAdmin", isAuth, adminController.deleteAdmin);

//UPDATE  /admin/updateAdmin
router.post("/updateAdmin", isAuth, adminController.updateAdmin);

module.exports = router;
