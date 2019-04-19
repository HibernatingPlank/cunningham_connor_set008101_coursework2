var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('index', { title: 'Members' });
    router.get('/index', (req, res) => res.render('index'));
    router.get('/mail', (req, res) => res.render('Mail'));
    router.get('/Base64', (req, res) => res.render('Base64'));
    router.get('/MORSECODE', (req, res) => res.render('MORSECODE'));
    router.get('/CAESARCIPHER', (req, res) => res.render('CAESARCIPHER'));
    router.get('/ROT13', (req, res) => res.render('ROT13'));
    router.get('/VIGENERECIPHER', (req, res) => res.render('VIGENERECIPHER'));   

});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
