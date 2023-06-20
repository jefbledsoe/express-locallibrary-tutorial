const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { // this is the route for /users
  res.send('respond with a resource hello');  // this is the response that is sent back to the browser
  // and is rendered in the browser
});
router.get('/cool/', function(req, res, next) { // this is the route for /users/cool
  res.send("lsdjflskdjfsdlkj"); // this is the response that is sent back to the browser
}); // and is rendered in the browser

module.exports = router;

