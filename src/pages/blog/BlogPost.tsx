import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [postMeta, setPostMeta] = useState<{
    title: string;
    description: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        // Load the post content
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();
        
        // Parse frontmatter and content
        const { data, content } = parseFrontmatter(text);
        
        setPostMeta(data);
        setContent(content);
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  if (!postMeta) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">{postMeta.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{postMeta.date}</p>
      <article className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}

// Helper function to parse frontmatter
function parseFrontmatter(text: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)/;
  const match = text.match(frontmatterRegex);
  
  if (!match) return { data: {}, content: text };

  const frontmatter = match[1];
  const content = match[2];

  const data = frontmatter.split('\n').reduce((acc, line) => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      acc[key.trim()] = value.join(':').trim().replace(/^['"]|['"]$/g, '');
    }
    return acc;
  }, {} as Record<string, string>);

  return { data, content };
}
