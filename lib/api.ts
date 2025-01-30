import { fetchGraphQL } from "./graphql";
import { GET_BLOG_POSTS, GET_SINGLE_POST } from "./queries";
import { BlogPost } from "./types";

// Fetch all blog posts
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

// ✅ Fix: Fetch Single Blog Post by Slug
export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  try {
    console.log("🟢 Sending GraphQL Request with Slug:", slug);
    const data: { postBy: BlogPost | null } = await fetchGraphQL(
      GET_SINGLE_POST,
      { slug }
    );

    return data.postBy;
  } catch (error) {
    console.error("❌ Error fetching blog post:", error);
    return null;
  }
};
