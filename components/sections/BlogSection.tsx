import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    date: "25 Sep 2022",
    title: "Making this the first true ones the uses a dictionary.",
    author: "Loura Sweety",
    comments: 35,
    shares: 26,
    image: "/images/project/1.webp", // Replace with your actual image path
  },
  {
    id: 2,
    date: "23 Sep 2022",
    title: "A Behind the scenes look of your plumbing company",
    author: "David Luis",
    comments: 80,
    shares: 45,
    image: "/images/project/2.webp", // Replace with your actual image path
  },
  {
    id: 3,
    date: "21 Sep 2022",
    title: "Now grab your tool belt and get to work!",
    author: "Jenefer Willy",
    comments: 95,
    shares: 58,
    image: "/images/project/3.webp", // Replace with your actual image path
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Latest News & Blog
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. has been the industrys standard dummy text ever since the
          1500s.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-top rounded-t-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <p className="text-blue-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {post.author} |{" "}
                  <span className="text-blue-500 underline">
                    {post.comments} Comments
                  </span>{" "}
                  | {post.shares} Share
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
