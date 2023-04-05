const { Schema } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,

      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      //set default value to the current timestamp
      //use a getter method to format timestamp on query
    },
    username: {
      type: String,

      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      ref: "reactionCount",
      //retrieves the length of the thought's reactions array field on query.
    },
  }
);

const Thought = ("thought", thoughtSchema);

module.exports = Thought;
