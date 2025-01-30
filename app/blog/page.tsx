"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AboutBanner from "@/components/sections/AboutBanner";
import { getBlogPosts } from "@/lib/api";
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
      <TopBar />
      <Navbar />
      <AboutBanner />

      {/* Blog Page Wrapper */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Blog Posts Section */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1>
            <div className="grid gap-8">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="border rounded-lg p-5 shadow-md"
                  >
                    {/* Featured Image (Fixed for Next.js 15) */}
                    {post.featuredImage && (
                      <div className="relative w-full h-52">
                        <Image
                          src={post.featuredImage.node.sourceUrl}
                          alt={post.featuredImage.node.altText || post.title}
                          fill
                          className="rounded-md object-cover"
                          priority
                        />
                      </div>
                    )}

                    {/* Blog Title */}
                    <h2 className="text-2xl font-semibold mt-4">
                      <Link
                        href={`/blog/${encodeURIComponent(post.slug)}`} // ✅ Fix Special Characters in URL
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Blog Excerpt */}
                    <p className="text-gray-600 mt-2">
                      <span
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
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

          {/* Sidebar (Categories & Search) */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>

            {/* Dummy categories - Later we fetch from WordPress */}
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/kitchen-plumbing"
                  className="text-teal-600 hover:underline"
                >
                  Kitchen Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/category/gas-line-services"
                  className="text-teal-600 hover:underline"
                >
                  Gas Line Services
                </Link>
              </li>
              <li>
                <Link
                  href="/category/water-line-repair"
                  className="text-teal-600 hover:underline"
                >
                  Water Line Repair
                </Link>
              </li>
            </ul>

            {/* Search Box */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Search blog..."
                className="w-full p-2 border rounded-md"
              />
              <button className="mt-2 w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
