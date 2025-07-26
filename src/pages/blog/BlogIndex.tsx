import React from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: filename.replace('.md', ''),
      ...data
    };
  });
  
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-2xl font-semibold hover:text-blue-600">{post.title}</a>
            </Link>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
