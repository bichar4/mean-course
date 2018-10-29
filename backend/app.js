const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts.js");
const app = express();

mongoose.connect("mongodb+srv://bichar4:randomrandom@cluster0-hdsoc.mongodb.net/node-angular?retryWrites=true")
.then(()=>{
  console.log('connected to database');
})
.catch(()=>{
  console.log('connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts",postRoutes)


module.exports = app;