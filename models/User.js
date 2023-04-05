const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      mustmatch: true,
    },
    thoughts: [thoughtSchema],
    friends: [friendsSchema],
  },
  {
    toJSON: {
      virtuals: true,
      ref: "User",
    },
  }
);