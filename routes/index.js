var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('index');
});

router.post('/card', function(req, res){
  console.log(req.body.dateOfBirth)
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName
    type: req.body.type,
    dateOfBirth
  })
})
module.exports = router;
