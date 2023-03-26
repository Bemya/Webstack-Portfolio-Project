const router = require("express").Router();
const {
  createUser,
  getUsers,
  getUserById,
  login,
} = require("./user.controller");

router.post("/", createUser);
router.get("/all", getUsers);

router.get("/", getUserById);
router.post("/login", login);

module.exports = router;
