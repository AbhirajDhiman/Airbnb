const express = require("express");
const mongoose = require("mongoose");
const path=require("path");
const Listing = require("./models/listing.js");

const app = express();
const port = 8080;
const Mongo_url = "mongodb://localhost:27017/wanderlust";

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(Mongo_url);
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/list", async (req, res) => {
  let sample = new Listing({
    title: "Home",
    description: "By Jatt",
    price: 400000,
    location: "California, USA",
    country: "India"
  });

  await sample.save();
  console.log("Sample was saved");
  res.send("Good testing");
});

app.get("/listings",async(req,res)=>{
    const listings=await Listings.find({});
    res.rendex("index.ejs");
});
app.get("/", (req, res) => {
  res.send("Hi Abhiraj Here!");
});