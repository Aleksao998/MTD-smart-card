const express = require("express");

//Controllers
const contactController = require("../controllers/contact");

const router = express.Router();

//POST /contact/contactForm
router.post("/contactForm", contactController.contactForm);

module.exports = router;
