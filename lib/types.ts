export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
}
