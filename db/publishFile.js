import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";
const publishFile = async (id) => {
  const GraphClient = new GraphQLClient(process.env.NEXT_PUBLIC_DB_URL, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
    },
  });

  const query = gql`
    mutation {
      publishAsset(where: { id: "${id}" }) {
        id
        url
        fileName
        size
      }
    }
  `;

  const response = await GraphClient.request(query);
  return response;
};

export default publishFile;
