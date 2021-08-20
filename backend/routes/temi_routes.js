const express = require('express');
const temiController = require('../controllers/temi_controller');
const check_authentication = require('../middleware/check_authentication');
const router = express.Router();

router.use(check_authentication);
router.get("/", temiController.getAllTemiUnits);
router.post("/", temiController.addNewTemiUnit);
router.patch("/:temiId", temiController.updateTemiUnitById);
router.delete("/:temiId", temiController.deleteTemiUnitById);
router.get("/permission", temiController.checkPermission);

module.exports = router;
