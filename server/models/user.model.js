const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  emailFormControl: {
    type: String,
    required: true,
    unique: true,
    
  },
  hashedPwd: { type: String, required: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  roles: [
    {
      type: String,
    },
  ],
  versionKey: false,
});
module.exports = mongoose.model("User", UserSchema);
