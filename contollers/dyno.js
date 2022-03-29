import { gql, GraphQLClient } from "graphql-request";
import { getCurrentUser } from "../models/User";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_DB_URL, {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
  },
});

async function getDynos() {
  const user = await getCurrentUser();
  const query = gql`
    query {
      dynos(where: { email: "${user.getEmail()}" }) {
        id
        icon
        endpoint
        coverImage
        heading
        description
        buttonLink
        buttonText
      }
    }
  `;

  try {
    const response = await client.request(query);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deleteDyno(id) {
  const user = await getCurrentUser();
  const query = gql`
    mutation {
      deleteDyno(where: { id: "${id}" }) {
        id
      }
    }
  `;

  try {
    await client.request(query);
    const dynos = await getDynos();
    return dynos;
  } catch (error) {
    console.log(error);
  }
}

export { getDynos, deleteDyno };
