var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

// X-Frame-Options
router.get('/xframeoptions', (req, res, next) => {
    res.render('xframeoptions', { title: 'XFRAMEOPTIONS' });
});

// Cache-Control
router.get('/cachecontrol', (req, res) => {
    let isCacheControl = req.query.enabled === 'true';
    let num = Number.parseInt(Math.random() * 1000);
    let header;

    if (isCacheControl) {
        header = 'no-cache, no-store, must-revalidate';
        res.append('Cache-Control', header);
    } else {
        header = 'nothing!!!';
    }

    res.render('cache', { title: 'CACHE', num: num, header: header });
});

// XSS
router.get('/xss', (req, res) => {
    res.append('X-XSS-Protection', '0');
    res.render('xss', { title: 'XSS', val: req.query.val, header: 'X-XSS-Protection: 0' });
});
router.get('/xssprotection', (req, res) => {
    res.append('X-XSS-Protection', '1');
    res.render('xss', { title: 'XSS PROTECTION', val: req.query.val, header: 'X-XSS-Protection: 1' });
});
router.get('/xssblock', (req, res) => {
    res.append('X-XSS-Protection', '1;mode=block');
    res.render('xss', { title: 'XSS PROTECTION', val: req.query.val, header: 'X-XSS-Protection: 1;mode=block' });
});

// Preconnect
router.get('/preconnect', (req, res) => {
    let key = 'preconnect';

    res.render('hints', {
        title: key.capitalize(),
        key: key,
        enabled: (req.query.enabled === 'true')
    });
});

// Prefetch
router.get('/prefetch', (req, res) => {
    let key = 'prefetch';

    res.render('hints', {
        title: key.capitalize(),
        key: key,
        enabled: (req.query.enabled === 'true')
    });
});

// Prerender
router.get('/prerender', (req, res) => {
    let key = 'prerender';

    res.render('hints', {
        title: key.capitalize(),
        key: key,
        enabled: (req.query.enabled === 'true')
    });
});

String.prototype.capitalize = function() {
    return this[0].toUpperCase() + this.slice(1);
}

module.exports = router;
