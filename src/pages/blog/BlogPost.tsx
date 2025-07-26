// src/pages/blog/BlogPost.tsx
import { useParams } from "react-router-dom";

// Mock data - replace with your actual data fetching logic
const blogPosts = {
  "getting-started-with-adtech": {
    title: "Getting Started with AdTech",
    content: "# Welcome to AdTech\n\nThis is the content of the blog post...",
    date: "2023-11-15"
  },
  "ai-in-advertising": {
    title: "AI in Advertising",
    content: "# AI is Changing Advertising\n\nThis is another blog post...",
    date: "2023-11-10"
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div className="prose dark:prose-invert">
        {post.content.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
