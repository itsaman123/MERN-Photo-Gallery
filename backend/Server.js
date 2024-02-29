const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/photogallery");

app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
