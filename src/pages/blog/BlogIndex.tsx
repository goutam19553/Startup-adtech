import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./posts/blogData";

const BlogIndex = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-bl from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          📚 Our Latest Blogs
        </h1>

        <p className="mb-10 text-gray-300 text-lg">
          Stay ahead in AdTech with the latest trends in outdoor advertising, immersive AR,
          and how India is transforming traditional media into digital powerhouses.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="transition-all group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-2xl hover:scale-[1.015]"
            >
              <h2 className="text-2xl font-semibold mb-2 text-primary group-hover:underline">
                {post.title}
              </h2>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
