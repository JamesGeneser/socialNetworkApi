const { exec } = require("child_process");
const { User } = require("../models");
const { populate } = require("../models/Thoughts");

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

  getFriends(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((friends) => res.json(friends))
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user.friends)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new friend in friend list
  postNewFriend(req, res) {
    User.findOne({ friends });
    populate("userId");
    exec(function (err, friend) {
      if (err) return handleError;
      console.log("friend added!");
    });
    // User.create(req.body)
    //   .then((friend) => {
    //     return User.findOneAndUpdate(
    //       { _id: req.body.userId },
    //       { $addToSet: { friends: friend.id } },
    //       { new: true }
    //     );
    //   })
    //   .then((friend) => res.json(friend))
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(500).json(err);
    //   });
  },
};
