const mongoose = require("mongoose");


const PublicationSchema = mongoose.Schema(
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

const PublicationModel = mongoose.model("booky",PublicationSchema);

module.exports = PublicationModel;