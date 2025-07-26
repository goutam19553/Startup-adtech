import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ content }) {
  return (
    <div className="prose max-w-4xl mx-auto py-8 px-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
