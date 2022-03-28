import { gql, GraphQLClient } from "graphql-request";
import { v4 as uuidv4 } from "uuid";
import { encrypt, decrypt } from "../crypto";
import { User, saveCurrentUser, getCurrentUser } from "../models/User";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_DB_URL, {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
  },
});

const publishAccount = async (id) => {
  const query = gql`
    mutation {
      publishAccount(where: { id: "${id}" }) {
        id
        email
        token
      }
    }
  `;

  try {
    const response_1 = await client.request(query);
    return response_1;
  } catch (error) {
    console.log(error);
  }
};

const createAccount = async (email, password) => {
  console.log(email, password);
  const query = gql`
    mutation {
      createAccount(
        data: {
          email: "${email}"
          password: "${password}"
          token: "${uuidv4()}"
        }
      ) {
        id
        email
        token
      }
    }
  `;

  try {
    const response_1 = await client.request(query);
    const response_2 = await publishAccount(response_1.createAccount.id);
    const n_user = new User(
      response_2.publishAccount.id,
      response_2.publishAccount.email,
      response_2.publishAccount.token
    );
    const saved = await saveCurrentUser(n_user);
    return saved;
  } catch (error) {
    console.log(error);
  }
};

const matchToken = async () => {
  const user = await getCurrentUser();
  if (user) {
    const query = gql`
      query {
        accounts(where: { token: "${user.getToken()}" }) {
          id
          email
          token
        }
      }
    `;

    try {
      const response_1 = await client.request(query);
      if (
        response_1.accounts.length == 1 &&
        response_1.accounts[0].id == user.geId()
      ) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }
};

const loginUser = async (email, password) => {
  const query = gql`
    query {
        accounts(where: { email: "${email}", password: "${password}" }) {
            id
            email
            token
        }
    }
    `;

  try {
    const response_1 = await client.request(query);
    if (response_1.accounts.length == 1) {
      const response_2 = await publishAccount(response_1.accounts[0].id);
      const n_user = new User(
        response_2.publishAccount.id,
        response_2.publishAccount.email,
        response_2.publishAccount.token
      );
      const saved = await saveCurrentUser(n_user);
      return saved;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

const logOut = async () => {
  const user = getCurrentUser();
  if (user) {
    localStorage.removeItem("dyno-cached");
    return true;
  } else {
    return false;
  }
};

export { createAccount, matchToken, logOut, loginUser };
