var express = require("express");

var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
   
      res.render("index");
    
  });
  
router.get("/saved", function(req, res) {
   
      res.render("saved");
    
  });
  
module.exports = router