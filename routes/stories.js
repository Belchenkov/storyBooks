const express = require('express');
const router = express.Router();

// Stories Index
router.get('/', (req, res) => {
    res.render('stories/index');
});

// Add Story Form
router.get('/add', (req, res) => {
    res.render('stories/add');
});

// Edit Story Form
router.get('/add', (req, res) => {
    res.render('stories/edit');
});


module.exports = router;