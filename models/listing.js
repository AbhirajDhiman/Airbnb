const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    set: (v) => v === "" ? "" : v
  },
  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model("Listing", listSchema);
module.exports = Listing;