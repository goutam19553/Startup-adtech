import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./posts/blogData";

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="text-white text-center mt-20">Post not found.</div>;

  const LazyComponent = lazy(post.Component);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default BlogPost;
