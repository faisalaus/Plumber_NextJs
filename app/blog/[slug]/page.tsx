import { getBlogPostBySlug } from "@/lib/api";
import { BlogPost } from "@/lib/types";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Fix: Await params before accessing slug
  const { slug } = await params;

  if (!slug) {
    return <p className="text-center text-gray-500">❌ Invalid URL</p>;
  }

  // ✅ Fix: Properly decode and sanitize the slug
  const decodedSlug = decodeURIComponent(slug);
  const sanitizedSlug = decodedSlug
    .normalize("NFKD") // Normalize characters
    .replace(/[^\w-]/g, ""); // Remove non-word characters

  console.log("🟢 Original Slug:", slug);
  console.log("🟢 Sanitized Slug:", sanitizedSlug);

  // ✅ Fetch the blog post using the sanitized slug
  const post: BlogPost | null = await getBlogPostBySlug(sanitizedSlug);

  if (!post) {
    return <p className="text-center text-gray-500">❌ Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      {/* Blog Title and Date */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">
        📅 {post.date ? new Date(post.date).toLocaleDateString() : "No date"}
      </p>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={800}
            height={450}
            priority
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose max-w-3xl mx-auto leading-7 text-gray-700">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
