import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        // Load the posts manifest
        const response = await fetch('/posts/posts.json');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading blog posts...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.slug} className="border-b pb-6">
            <Link 
              to={`/blog/${post.slug}`}
              className="text-2xl font-semibold hover:text-blue-600"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{post.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
