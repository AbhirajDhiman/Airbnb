const mongoose = require("mongoose");
const Listing = require("../models/listing"); // go up one folder
const data = require("./data"); // import sample data

const Mongo_url = "mongodb://localhost:27017/wanderlust";

// Connect to MongoDB and seed data
async function initDB() {
  try {
    await mongoose.connect(Mongo_url);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Listing.deleteMany({});
    console.log("🗑️ Old data deleted");

    // Insert fresh data
    await Listing.insertMany(data);
    console.log("🌱 Database seeded successfully");

    // Close connection
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Initialization error:", err);
    process.exit(1);
  }
}

initDB();
