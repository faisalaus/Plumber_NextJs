import { getBlogPostBySlug } from "@/lib/api";
import { BlogPost } from "@/lib/types";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: BlogPost | null = await getBlogPostBySlug(params.slug);

  if (!post) {
    return <h1 className="text-center text-2xl font-bold">Post Not Found</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.featuredImage && (
        <div className="relative w-full h-96">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
