import { gql, GraphQLClient } from "graphql-request";
const GraphClient = new GraphQLClient(process.env.NEXT_PUBLIC_DB_URL, {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
  },
});

const createAccount = async (a_email, a_password) => {
  const query = gql`
    mutation {
      createAccount(data: { password: "${a_password}", email: "${a_email}" }) {
        id
        name
        email
        avatar
      }
    }
  `;

  try {
    const response = await GraphClient.request(query);
    return response;
  } catch (error) {
    return error;
  }
};

const loginAccount = async (a_email, a_password) => {
  const query = gql`
      query {
        accounts(
          where: { email: "${a_email}", password: "${a_password}" }
        ) {
          id
          name
          email
          avatar
        }
      }
    `;

  try {
    const response = await GraphClient.request(query);
    return response;
  } catch (error) {
    return error;
  }
};

export { createAccount, loginAccount };
