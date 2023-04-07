// const { exec } = require("child_process");
const { User } = require("../models");
// const { populate, validate } = require("../models/Thoughts");

module.exports = {
  getUsers(req, res) {
    User.find()

      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  postNewUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: "User and associated apps deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  // create a new friend in friend list
  postNewFriend(req, res) {
    console.log(req.params.userId);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        console.log(req.params.userId);
        if (!dbUserData) {
          res.status(404).json({ message: "No user found by that id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
