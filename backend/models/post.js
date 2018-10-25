const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{type:String,require:true}, // for typescript ,use "string <lowercase>"
    content :{type:String, required:true}
});

module.exports = mongoose.model('Post',postSchema);