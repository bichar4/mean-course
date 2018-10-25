const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');
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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts",(req,res,next) => {
  const post = new Post({
    title:req.body.title,
    content:req.body.content
  });
  post.save()
  .then()
  .catch();

  console.log(post);
  res.status(201).json({
    message:'Post added succesfully'
  });
});
app.use("/api/posts", (req, res, next) => {
 Post.find()
   .exec()
   .then(posts => {
     console.log(posts);
     res.status(200).json({
      message: "Posts fetched succesfully!",
      posts: posts
    });
   })
   .catch();

});

module.exports = app;