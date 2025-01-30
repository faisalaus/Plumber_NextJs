import { getBlogPostBySlug } from "@/lib/api";
import { BlogPost } from "@/lib/types";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(params.slug); // ✅ FIX: Removed `await`
  const post: BlogPost | null = await getBlogPostBySlug(decodedSlug);

  if (!post) {
    return <p className="text-center text-gray-500">❌ Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      {/* Blog Title and Date */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">
        📅 {new Date(post.date).toLocaleDateString()}
      </p>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Blog Content */}
      <article className="prose max-w-none lg:prose-lg xl:prose-xl mx-auto mt-8 text-gray-800 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
