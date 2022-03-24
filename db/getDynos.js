import { gql, GraphQLClient } from "graphql-request";

async function getDynos(endpoint) {
  const GraphClient = new GraphQLClient(process.env.DB_URL, {
    headers: {
      Authorization: process.env.BEARER_TOKEN,
    },
  });
  const query = gql`
    query {
      dynos(where: { endpoint: "${endpoint}" }) {
        endpoint
        icon
        coverImage
        heading
        description
        buttonText
        buttonLink
      }
    }
  `;
  const data = await GraphClient.request(query);
  const dyno = data.dynos[0];
  return dyno;
}

module.exports = getDynos;
