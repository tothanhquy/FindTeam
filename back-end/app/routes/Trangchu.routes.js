var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('trang chu home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this trang chu');
})

module.exports = router;