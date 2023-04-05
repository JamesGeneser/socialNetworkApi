const { ObjectId } = require("bson");
const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    populate: ObjectId,
    //Default value is set to a new ObjectId
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
    //Set default value to the current timestamp
    //Use a getter method to format the timestamp on query
  },
});
