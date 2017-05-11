var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/xframeoptions', (req, res, next) => {
    res.render('xframeoptions', { title: 'XFRAMEOPTIONS' });
});

module.exports = router;
