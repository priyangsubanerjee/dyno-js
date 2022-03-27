import { gql, GraphQLClient } from "graphql-request";

async function getDynos(endpoint) {
  const GraphClient = new GraphQLClient(process.env.NEXT_PUBLIC_DB_URL, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
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
