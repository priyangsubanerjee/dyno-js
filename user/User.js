class User {
  constructor(email, id, token, name, avatar) {
    this.name = name;
    this.email = email;
    this.token = token;
    this.id = id;
    this.avatar = avatar;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  getId() {
    return this.id;
  }

  getAvatar() {
    return this.avatar;
  }

  getToken() {
    return this.token;
  }

  save() {
    localStorage.setItem("user", JSON.stringify(this));
  }
}

function getCurrentUser() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  return user;
}

export { User, getCurrentUser };
