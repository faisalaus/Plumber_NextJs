import { fetchGraphQL } from "./graphql";
import { GET_BLOG_POSTS } from "./queries";
import { BlogPost } from "./types";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const data: { posts: { nodes: BlogPost[] } } = await fetchGraphQL(
      GET_BLOG_POSTS
    );
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
