const { Schema, model } = require("mongoose");

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
      //set default value to the current timestamp
      //use a getter method to format timestamp on query
    },
    username: {
      type: String,

      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      ref: "reactionCount",
      //retrieves the length of the thought's reactions array field on query.
    },
  }
);
