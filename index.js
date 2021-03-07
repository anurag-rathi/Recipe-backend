const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;

var config = require("./config");
const mongoose = require("mongoose");

var dishRouter = require("./routes/dishRouter");

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

connect.then(() => {
  console.log("Connected correctly to the db");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

app.use("/dishes", dishRouter);

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});
