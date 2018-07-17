var express = require('express');
var router = express.Router();

/* GET marion's page. */
router.get('/', function(req, res, next) {
  res.render('marion', { title: 'toto' });
});

module.exports = router;
