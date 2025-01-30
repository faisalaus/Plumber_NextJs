"use client";
import { useEffect, useState } from "react";
import { getBlogPosts } from "@/lib/api";
import BlogBanner from "@/components/sections/BlogBanner";
import { BlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <BlogBanner />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {post.featuredImage && (
                  <div className="relative w-full h-64">
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>
                )}
                <h2 className="text-2xl font-semibold mt-4">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt && ( // ✅ Fix: Ensure excerpt exists before rendering
                  <p
                    className="text-gray-600 mt-2"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-teal-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))
          ) : (
            <p>No blog posts found.</p>
          )}
        </div>
      </div>
    </>
  );
}
