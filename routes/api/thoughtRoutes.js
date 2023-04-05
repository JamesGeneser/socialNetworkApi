const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  postNewThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postNewThought);

router.route("/:thoughtId").get(getSingleThought);

module.exports = router;
