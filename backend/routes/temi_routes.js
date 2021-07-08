const express = require('express');
const temiController = require('../controllers/temi_controller');
const router = express.Router();

router.get("/", temiController.getAllTemiUnits);
router.post("/", temiController.addNewTemiUnit);
router.patch("/:tid", temiController.updateTemiUnitById);
router.delete("/:tid", temiController.deleteTemiUnitById);

module.exports = router;
