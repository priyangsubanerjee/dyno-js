import { encrypt, decrypt } from "../crypto";

class User {
  constructor(id, email, token) {
    this.id = id;
    this.email = email;
    this.token = token;
  }

  geId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getToken() {
    return this.token;
  }
}

async function saveCurrentUser(user) {
  const user_json = JSON.stringify(user);
  const encrypted = encrypt(user_json);
  localStorage.setItem("dyno-cached", JSON.stringify(encrypted));
  return true;
}

async function getCurrentUser() {
  const user = localStorage.getItem("dyno-cached");
  if (user) {
    const decrypted = decrypt(JSON.parse(user));
    const c_user = JSON.parse(decrypted);
    return new User(c_user.id, c_user.email, c_user.token);
  }
  return null;
}

export { User, saveCurrentUser, getCurrentUser };
