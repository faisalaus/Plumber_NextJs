// Fetch multiple blog posts
export const GET_BLOG_POSTS = `
  query GetBlogPosts {
    posts(first: 10) {
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = `
  query GetSinglePost($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      slug
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
