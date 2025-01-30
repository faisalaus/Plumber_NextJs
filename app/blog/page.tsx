"use client"; // Client Component

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
        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Posts Section */}
          <div className="md:col-span-2 space-y-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {post.featuredImage && (
                    <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Blog Title */}
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-teal-600 transition-colors duration-300">
                      <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Blog Excerpt */}
                    <p className="text-gray-600 mt-3 line-clamp-3">
                      <span
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    </p>

                    {/* Read More Button */}
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      className="inline-block mt-4 px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No blog posts found.</p>
            )}
          </div>

          {/* Sidebar (Categories & Search) */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
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
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <button className="mt-2 w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition duration-300">
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
