import { gql, GraphQLClient } from "graphql-request";
import { User } from "../user/User";
const GraphClient = new GraphQLClient(process.env.NEXT_PUBLIC_DB_URL, {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
  },
});

const generateToken = () => {
  const token =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return token;
};

const updateToken = async (id) => {
  const query = `mutation {
  upsertAccount(upsert: {create: {}, update: {token: "${generateToken()}"}}, where: {id: "${id}" }) {
    id
    token
    name
    email
    avatar

  }
}

`;

  try {
    const response = await GraphClient.request(query);
    const res = await publishAccount(response.upsertAccount.id);
    return res;
  } catch (error) {}
};

const publishAccount = async (id) => {
  const query = gql`
    mutation {
      publishAccount(where: { id: "${id}" }) {
        id
        token
        name
        email
        avatar
      }
    }
  `;
  const response = await GraphClient.request(query);
  return response;
};

const createAccount = async (a_email, a_password) => {
  const query = gql`
    mutation {
      createAccount(data: { password: "${a_password}", email: "${a_email}", token: "${generateToken()}" }) {
        id
        token
        name
        email
        avatar
      }
    }
  `;

  try {
    const res = await GraphClient.request(query);
    const response = await publishAccount(res.createAccount.id);
    const n_user = new User(
      response.publishAccount.email,
      response.publishAccount.id,
      response.publishAccount.token,
      response.publishAccount.name,
      response.publishAccount.avatar
    );
    n_user.save();
    return true;
  } catch (error) {
    return false;
  }
};

const loginAccount = async (a_email, a_password) => {
  const query = gql`
      query {
        accounts(
          where: { email: "${a_email}", password: "${a_password}" }
        ) {
          id
          token
          name
          email
          avatar
        }
      }
    `;

  try {
    const res = await GraphClient.request(query);
    const response = await updateToken(res.accounts[0].id);
    if (response.publishAccount.token) {
      const n_user = new User(
        response.publishAccount.email,
        response.publishAccount.id,
        response.publishAccount.token,
        response.publishAccount.name,
        response.publishAccount.avatar
      );
      n_user.save();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

const checkIfLoggedIn = async () => {
  if (localStorage.getItem("user")) {
    const e_user = await JSON.parse(localStorage.getItem("user"));
    const query = gql`
            query {
              accounts(
                where: { email: "${e_user.email}", token: "${e_user.token}" }
              ) {
                id
                token
                name
                email
                avatar
              }
            }
          `;

    try {
      const response = await GraphClient.request(query);
      if (response.accounts[0].token == e_user.token) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  } else {
    return false;
  }
};

export { createAccount, loginAccount, checkIfLoggedIn };
