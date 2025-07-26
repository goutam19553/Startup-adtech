// src/pages/blog/BlogIndex.tsx
import { Link } from "react-router-dom";

// Mock data - replace with your actual data fetching logic
const blogPosts = [
  {
    slug: "getting-started-with-adtech",
    title: "Getting Started with AdTech",
    description: "Learn the basics of advertising technology",
    date: "2023-11-15"
  },
  {
    slug: "ai-in-advertising",
    title: "AI in Advertising",
    description: "How artificial intelligence is transforming ads",
    date: "2023-11-10"
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {blogPosts.map(post => (
          <div key={post.slug} className="border-b pb-6">
            <Link 
              to={`/blog/${post.slug}`}
              className="text-2xl font-semibold hover:text-blue-600"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
