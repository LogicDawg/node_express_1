
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