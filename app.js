const express = require("express");
const mongoose = require("mongoose");
const path=require("path");
const Listings = require("./models/listing");
const app = express();
const port = 8080;
const Mongo_url = "mongodb://localhost:27017/wanderlust";

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}))

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
// new route
app.get("/listings/new",(req,res)=>{
  res.render("listings/newform.ejs");
})
// Show Route
app.get("/listings/:id", async (req, res) => {
  let{id}=req.params;
  const  listing = await Listings.findById(id);
  res.render("listings/show.ejs",{listing});
});
// create route
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("listings"); // or res.render("listings") if you're rendering a view
  } catch (err) {
    console.error("Error saving listing:", err);
    res.status(500).send("Something went wrong.");
  }
});
// UPDATE ROUTE
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, {
    runValidators: true,
    new: true,
  });
  console.log(updatedListing);
  res.redirect(`/listings/${id}`);
});

// DELETE ROUTE
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});


app.get("/", (req, res) => {
  res.send("Hi Abhiraj Here!");
});