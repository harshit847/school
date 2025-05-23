const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

router.post('/addSchool', schoolController.addSchool);
router.get('/listSchool',schoolController.listSchool)

module.exports = router;
