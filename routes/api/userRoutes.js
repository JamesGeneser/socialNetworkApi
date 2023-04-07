const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  postNewFriend,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser);

router.route("/:userId/friends/:friendsId").post(postNewFriend);
module.exports = router;
