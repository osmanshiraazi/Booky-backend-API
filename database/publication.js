const mongoose = require("mongoose");


const PublicationSchema = mongoose.Schema(
  {
    id: 1,
    name: "writex",
    books: ["12345Book"]
  }
);

const PublicationModel = mongoose.model("booky",PublicationSchema);

module.exports = PublicationModel;