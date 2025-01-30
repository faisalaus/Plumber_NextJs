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

export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  try {
    const data: { postBy: BlogPost } = await fetchGraphQL(GET_SINGLE_POST, {
      slug,
    }); // ✅ Passing slug correctly
    return data.postBy;
  } catch (error) {
    console.error(`❌ Error fetching post "${slug}":`, error);
    return null;
  }
};
