const router = require("express").Router()
const disciplineController = require("../controllers/disciplineController")

router.route("/discipline").post((req,res) => disciplineController.create(req,res));
router.route("/discipline/all").get((req, res)=> disciplineController.readAll(req,res));
router.route("/discipline/delete/:id").post((req, res)=> disciplineController.delete(req,res));
router.route("/discipline/:id").get((req, res)=> disciplineController.readOne(req,res));
router.route("/discipline/edit/:id").put((req, res)=> disciplineController.update(req,res));

module.exports = router;