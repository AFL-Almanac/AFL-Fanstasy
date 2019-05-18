const express = require("express");
const router = new express.Router();
const auth = require("../middleware/Auth");
const User = require("../models/user");

router.post("/users/sign_up", async (req, res) => {
  const user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.tname = req.body.tname;
  console.log("req.user", req.body.email);
  console.log(req.body);

  try {
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });

    await req.user.save();
  } catch (e) {
    res.status(500).send();
  }
});

//user login
router.post("/users/login_user", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

//checks which fields can be updated
router.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "tname"];
  const isValidOption = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOption) {
    return res.status(400).send({ error: "Invalid Updates! " });
  }

  try {
    const user = await User.findById(_id);

    updates.forEach(update => (user[update] = req.body[update]));

    await user.save();

    // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id);

    if (!users) {
      return res.status(404).send();
    }
    res.send(users);
  } catch (e) {
    return res.status(500).send();
  }
});

module.exports = router;
