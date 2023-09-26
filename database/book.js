const mongoose = require("mongoose");


const bookSchema = mongoose.Schema(
  {
    ISBN: String,
    title:String,
    pubDate: String,
    language: String,
    numPage: Number,
    author: [Number],
    publications: [Number],
    category: [String]
  }
);

const BookModel = mongoose.model("booky",bookSchema);

module.exports = BookModel;