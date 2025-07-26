// src/pages/blog/BlogIndex.tsx

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogIndex = () => {
  const blogPosts = [
    {
      title: 'How 3D Billboards Are Changing the Game for Brand Engagement in 2025',
      date: 'July 26, 2025',
      path: '/blog/posts/Blog1',
      description: 'The Ad Project is bringing a revolution to Indian outdoor advertising with 3D billboards that mesmerize audiences. Learn how this tech is changing branding forever.',
    },
    // You can add more blogs here in the future.
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Helmet>
        <title>Blog | The Ad Project</title>
        <meta name="description" content="Read the latest insights, innovations, and stories from The Ad Project about outdoor advertising, AR, and marketing in India." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 border rounded-lg hover:shadow-md transition">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="mb-4">{post.description}</p>
            <Link to={post.path} className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
