const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: String,
  url: String
}, { _id: false }); // Prevents Mongoose from creating a separate _id for image

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: imageSchema,
  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model("Listing", listSchema);
module.exports = Listing;