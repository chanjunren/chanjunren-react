const express = require('express');
const appController = require('../controllers/app_controller');
const router = express.Router();
const check_authentication = require('../middleware/check_authentication');

router.use(check_authentication);
router.get("/", appController.getAllApplications);
router.post("/", appController.addApplication);
router.delete("/:appId", appController.deleteApplicationByAid);
router.patch("/:appId", appController.updateApplicationByAid);

module.exports = router;
