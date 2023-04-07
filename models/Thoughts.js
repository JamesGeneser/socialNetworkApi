// const mongoose = require("mongoose");
const { Schema, model, Types } = require("mongoose");
const Reaction = require("./Reaction");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

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

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
