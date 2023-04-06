const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  postNewFriend,
  getFriends,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);

router.route("/:userId").get(getSingleUser);

router.route("/:userId/friends").get(getFriends);

router.route("./:userId/friends/:friendId").post(postNewFriend);
module.exports = router;
