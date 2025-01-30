export const GET_BLOG_POSTS = `
  query GetBlogPosts {
    posts(first: 10) {
      nodes {
        id
        title
        slug
        excerpt
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
