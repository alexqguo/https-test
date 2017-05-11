var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// X-Frame-Options
router.get('/xframeoptions', (req, res, next) => {
    res.render('xframeoptions', { title: 'XFRAMEOPTIONS' });
});

// Cache-Control
router.get('/cachecontrol', (req, res) => {
    let isCacheControl = req.query.enabled === 'true';
    let num = Number.parseInt(Math.random() * 1000);

    if (isCacheControl) {
        res.append('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    res.render('cache', { title: 'CACHE', num: num });
});

// XSS
router.get('/xss', (req, res) => {
    res.append('X-XSS-Protection', '0');
    res.render('xss', { title: 'XSS', val: req.query.val });
});
router.get('/xssprotection', (req, res) => {
    res.append('X-XSS-Protection', '1');
    res.render('xss', { title: 'XSS PROTECTION', val: req.query.val });
});
router.get('/xssblock', (req, res) => {
    res.append('X-XSS-Protection', '1;mode=block');
    res.render('xss', { title: 'XSS PROTECTION', val: req.query.val });
});

module.exports = router;
