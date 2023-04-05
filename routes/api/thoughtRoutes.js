const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  postNewThought,
} = require("../../controllers/thoughtController");
