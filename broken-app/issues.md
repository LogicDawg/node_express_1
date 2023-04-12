# Broken App Issues

- First fixed the variable declarations, they were set to const, let, and var. Since the variables will not be changing I made them all into const.

```js
const User = require('./users')
const express = require('express')
const app = express();
```

- I also created a sperate script to handle the developer call, this will help clean up the code and make it run more efficient.

```js
class User {
    constructor(name, bio) {
      this.name = name;
      this.bio = bio;
    }
    async userInfo(){
        let url = `https://api.github.com/users/${this.name}`;
        let response = await $.getJSON(url)
        return response;
    }
  
}  

module.exports = User
```
- I imported the script into our app.js file to allow us to use the new Class.

```js
const User = require('./users')
```
- After we can simply create the new class with the request body information and return it into JSON without having to map and jsonify the results. This will create cleaner code that will also be more optimized.

```js
app.post('/', function(req, res, next) {
  try {
    let newUser = new User(req.body.name, req.body.bio);
    return res.json({developers: newUser});
  } catch(err) {
    next(err);
  }
});
```

