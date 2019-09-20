var express = require('express');
var router = express.Router();

var user = require('../controllers/user')

let { isLoggedIn, hasAuth } = require('../middleware/hasAuth');

/* GET users listing. */
router.get('/login', user.show_login)
router.get('/signup', user.show_signup)
router.post('/login', user.login)
router.post('/signup', user.signup)
router.post('/logout', user.logout)
router.get('/logout', user.logout)

var landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/submit_lead', landing.submit_lead)
router.get('/leads', isLoggedIn, hasAuth, landing.show_leads)
router.get('/lead/:lead_id', landing.show_lead)
router.get('/lead/edit/:lead_id', landing.show_edit_lead)
router.post('/lead/edit/:lead_id', landing.edit_lead)
router.post('/lead/delete/:lead_id', landing.delete_lead)
router.post('/lead/delete-json/:lead_id', landing.delete_lead_josn)

module.exports = router;
