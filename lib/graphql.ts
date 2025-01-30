import { GraphQLClient } from "graphql-request";

const WP_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

if (!WP_GRAPHQL_ENDPOINT) {
  console.error("❌ Missing WORDPRESS_GRAPHQL_ENDPOINT in .env file");
  throw new Error(
    "❌ Missing WORDPRESS_GRAPHQL_ENDPOINT. Check your .env file."
  );
}

// Initialize GraphQL client
const client = new GraphQLClient(WP_GRAPHQL_ENDPOINT);

export const fetchGraphQL = async <T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> => {
  try {
    console.log("🟢 Sending GraphQL Request with Variables:", variables); // Debugging log
    return await client.request<T>(query, variables); // ✅ Ensure variables are passed
  } catch (error) {
    console.error("❌ GraphQL request failed:", error);
    throw new Error("❌ GraphQL request failed");
  }
};
