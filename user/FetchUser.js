const User = require("./User");

function FetchUser() {
  if (localStorage.getItem("user")) {
    let data = JSON.parse(localStorage.getItem("user"));
    const user = new User(data.name, data.email);
    return user;
  }
}

export default FetchUser;
