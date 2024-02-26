const { Router } = require("express");
const {
  login_get,
  login_post,
  logout_get,
  signup_get,
  signup_post,
} = require("../../controllers/Students/Students");

const router = Router();

router.post("/signup", signup_post);
router.post("/login", login_post);
router.get("/logout", logout_get);

module.exports = router;