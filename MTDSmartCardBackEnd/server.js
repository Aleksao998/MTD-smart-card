const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
var http = require("http");
const rateLimit = require("express-rate-limit");
//Routes
const contactRoutes = require("./routes/contact");
const profileRoutes = require("./routes/profile");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");

var schedule = require("node-schedule");

//models
const Profile = require("./models/profile");

const app = express();

var morgan = require("morgan");

app.use(cors());
app.use(morgan("tiny"));
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 20;
rule.minute = 24;
//Schedule action
var j = schedule.scheduleJob(rule, async () => {
  console.log("Crons started");
  try {
    console.log("delete users");
    const deleteProfiles = await Profile.deleteMany({
      validation: false,
      validationTokenExpiration: { $lt: new Date() },
    });
  } catch {
    console.log("error");
  }
});
//Rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
//app.use(limiter);

//Hide express
app.disable("x-powered-by");

//Helmet
app.use(helmet.xssFilter());
app.use(helmet.frameguard("deny"));
app.use(helmet.noSniff());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/app/contact", contactRoutes);
app.use("/app/profile", profileRoutes);
app.use("/app/auth", authRoutes);
app.use("/app/order", orderRoutes);
app.use("/app/admin", adminRoutes);

//Error handler
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://AleksaOpacic:opacicaleksa32@cluster0.cplrq.mongodb.net/MTDSmartCard"
  )
  .then((result) => {
    app.listen(443);
  })
  .catch((err) => {
    console.log(err);
  });
