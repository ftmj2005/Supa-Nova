const mongoose = require("mongoose");
const axios = require("axios"); // Add this import for API calls

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  isDefault: { type: Boolean, default: false },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  role: {
    type: String,
    enum: ["user", "seller"],
    default: "user",
  },
  addresses: [addressSchema],
  profileImage: {
    type: String,
    default: "https://via.placeholder.com/200x200",
  },
});

// Pre-save hook to automatically add a profile image for new users using a dummy API
userSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      // Use randomuser.me API to get a random profile image
      const response = await axios.get("https://randomuser.me/api/");
      this.profileImage = response.data.results[0].picture.large;
    } catch (error) {
      // If API fails, keep the default placeholder
      console.error("Error fetching profile image:", error.message);
      // Default is already set in schema
    }
  }
  next();
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
