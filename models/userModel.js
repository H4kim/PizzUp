const mongoose = require("mongoose");
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name !"],
    maxlength: 40,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "A user must have an email !"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        return validator.validate(email);
      },
    },
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    required: [
      true,
      "A user must have a phone number so we can call you when your order is reay :D !",
    ],
  },
  password: {
    type: String,
    required: [true, "please provide a password "],
    minlength: 4,
    maxlength: 60,
  },
  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password "],
    validate: {
      validator: function (passConfirm) {
        return passConfirm === this.password;
      },
    },
  },
});

userSchema.pre("save", async function () {
  const encryptedPassword = await bcrypt.hash(this.password, 12);

  this.password = encryptedPassword;
  this.passwordConfirm = undefined;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
