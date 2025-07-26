// src/pages/blog/BlogIndex.tsx

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogIndex = () => {
  const blogPosts = [
    {
      title: 'How 3D Billboards Are Changing the Game for Brand Engagement in 2025',
      date: 'July 26, 2025',
      path: '/blog/posts/blog1', // Make sure this matches the route
      description: 'The Ad Project is bringing a revolution to Indian outdoor advertising with 3D billboards that mesmerize audiences. Learn how this tech is changing branding forever.',
    },
    // Add more blog posts here as needed
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto text-white">
      <Helmet>
        <title>Blog | The Ad Project</title>
        <meta name="description" content="Read the latest insights, innovations, and stories from The Ad Project about outdoor advertising, AR, and marketing in India." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 border rounded-lg hover:shadow-md transition bg-gray-800">
            <h2 className="text-2xl font-semibold text-bharat-teal">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="mb-4 text-gray-300">{post.description}</p>
            <Link to={post.path} className="text-bharat-teal hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
