const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "jobseeker", "employee"]
  }
});

module.exports = mongoose.model("User", UserSchema);