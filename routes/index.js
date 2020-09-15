var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('hello prakash ,i ,laptop,your best friend');
});

module.exports = router;
