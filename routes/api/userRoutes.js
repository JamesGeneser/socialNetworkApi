const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  deleteUser,
  postNewFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(postNewUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendsId")
  .post(postNewFriend)
  .delete(deleteFriend);
module.exports = router;
