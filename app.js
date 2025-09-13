const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Listings = require("./models/listing"); // ✅ Consistent naming
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');

const app = express();
const port = 8080;
const Mongo_url = "mongodb://localhost:27017/wanderlust";

// View engine setup
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

// Connect to MongoDB
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(Mongo_url);
}

// Server start
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Sample creation route
app.get("/list", async (req, res) => {
  let sample = new Listings({
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

// Index Route
app.get("/listings", async (req, res) => {
  const listings = await Listings.find({});
  res.render("listings/index", { listings });
});

// New Form Route
app.get("/listings/new", (req, res) => {
  res.render("listings/newform");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findById(id);
  res.render("listings/show", { listing });
});

// Create Route
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listings(req.body.listing); // ✅ Correct model name
    await newListing.save();
    res.redirect("/listings"); // ✅ Correct redirect path
  } catch (err) {
    console.error("Error saving listing:", err);
    res.status(500).send("Something went wrong.");
  }
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findById(id); // ✅ Correct model usage
  res.render("listings/edit", { listing }); // ✅ Correct render path
});

// Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let updatedListing = await Listings.findByIdAndUpdate(id, req.body.listing, {
    runValidators: true,
    new: true,
  });
  console.log(updatedListing);
  res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listings.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

// Root Route
app.get("/", (req, res) => {
  res.send("Hi Abhiraj Here!");
});