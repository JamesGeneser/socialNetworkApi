const { Schema, model } = require("mongoose");
const Thought = require("./Thoughts");

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
    thoughts: { type: [Thought.schema], required: true },
    // friends: [friendsSchema],
  },
  {
    toJSON: {
      virtuals: true,
      ref: "User",
    },
  }
);
const User = model("user", userSchema);

module.exports = User;
