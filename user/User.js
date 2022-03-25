class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
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

  save() {
    localStorage.setItem("user", JSON.stringify(this));
    console.log(`User saved: ${this.name}`);
  }
}

module.exports = User;
