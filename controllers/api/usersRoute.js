const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const userNew = new User();
    userNew.username = req.body.username;
    userNew.email = req.body.email;
    userNew.password = req.body.password;

    const userData = await userNew.save();

    req.session.save(() => {
      req.session.username = userData.id;
      req.session.logged_in = true;
      req.session.user_id = userData.id;
      // res.status(200).json(userData);
      res.json({ user: userData, message: "You are now signed in!" });
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.username = userData.username;
      req.session.logged_in = true;
      req.session.user_id = userData.id;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ errMessage: err.message });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
