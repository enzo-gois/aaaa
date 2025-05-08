const router = require("express").Router()
const studentRouter = require("./students");
const disciplineRouter = require("./discipline")

router.use("/", studentRouter);
router.use("/", disciplineRouter);

module.exports = router;