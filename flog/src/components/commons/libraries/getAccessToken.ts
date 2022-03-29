import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient("https://gyeoriii.shop/graphql", {
      credentials: "include",
    });
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    console.log(result);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
