const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
// connection to mognodb
mongoose.connect(
  "mongodb://localhost:27017/tutorial",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log("db connected succesfully");
    }
  }
);
//middleware
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
//router
const infoRouter = require("./router");

app.use("/info", infoRouter);
//listen
app.listen(5000, () => {
  console.log("server atarted at 5000");
});
