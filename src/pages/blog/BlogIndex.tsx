import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "🚀 The Rise of 3D Billboards in India",
    description:
      "Explore how 3D anamorphic billboards are reshaping brand engagement across urban India.",
    date: "July 27, 2025",
    link: "/blog/3d-billboards-rise",
  },
  {
    id: 2,
    title: "🌍 Why Physical Ads Still Rule in the Digital Age",
    description:
      "Despite the dominance of digital, traditional billboards and wall ads continue to deliver unmatched visibility and trust.",
    date: "July 15, 2025",
    link: "/blog/physical-vs-digital-ads",
  },
  {
    id: 3,
    title: "🔍 How AR is Enhancing Outdoor Advertising",
    description:
      "From QR codes to full AR experiences, see how tech is blending with the real world for advertisers.",
    date: "June 28, 2025",
    link: "/blog/ar-outdoor-ads",
  },
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-bl from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          📚 Our Latest Blogs
        </h1>

        <p className="mb-10 text-gray-300 text-lg">
          Stay ahead in AdTech with the latest trends in outdoor advertising,
          immersive AR experiences, and how India is transforming traditional
          media into digital powerhouses.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.link}
              className="transition-all group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-2xl hover:scale-[1.015]"
            >
              <h2 className="text-2xl font-semibold mb-2 text-primary group-hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-3">{post.description}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
