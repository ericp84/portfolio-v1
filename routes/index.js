var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mymails', function (req, res, next) {
  res.render('mymails', {title: 'portfolio'})
})
router.get('/bikeshop', function (req, res, next) {
  res.render('bikeshop', {title: 'portfolio'})
})
router.get('/weather', function (req, res, next) {
  res.render('weather', {title: 'portfolio'})
})
router.get('/blackboard', function (req, res, next) {
  res.render('blackboard', {title: 'portfolio'})
})
router.get('/ticetac', function (req, res, next) {
  res.render('ticetac', {title: 'portfolio'})
})
router.get('/mymovies', function (req, res, next) {
  res.render('mymovies', {title: 'portfolio'})
})
router.get('/morningnews', function (req, res, next) {
  res.render('morningnews', {title: 'portfolio'})
})
router.get('/locapic', function (req, res, next) {
  res.render('locapic', {title: 'portfolio'})
})
router.get('/faceup', function (req, res, next) {
  res.render('faceup', {title: 'portfolio'})
})
router.get('/geotrash', function (req, res, next) {
  res.render('geotrash', {title: 'portfolio'})
})

module.exports = router;
