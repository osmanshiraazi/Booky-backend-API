const mongoose = require("mongoose");


const AuthorSchema = mongoose.Schema(
  {
    id: 1,
    name: "writex",
    books: ["12345Book"]
  }
);

const AuthorModel = mongoose.model("booky",AuthorSchema);

module.exports = AuthorModel;