const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  postNewThought,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postNewThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought);

module.exports = router;
