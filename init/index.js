const express=require("express");
const app=express();
const path = require("path");
const mongoose= require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

const Mongo_url = "mongodb://localhost:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(Mongo_url);
}

const initDB = async()=>{
  await Listing.deleteMany({});
  await Listing.insertMany(initdata.data);
  console.log("Data was initialised");
}
initDB();