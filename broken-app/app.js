const User = require('./users')
const express = require('express')
const app = express();

app.post('/', function(req, res, next) {
  try {
    let newUser = new User(req.body.name, req.body.bio);
    return res.json({developers: newUser});
  } catch(err) {
    next(err);
  }
});

app.listen(3000);
