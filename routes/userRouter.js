const express = require("express");
const router = express.Router();

const getUser = (req, res) => {
  res.send("get user");
};

router.route("/").get(getUser);

module.exports = router;
