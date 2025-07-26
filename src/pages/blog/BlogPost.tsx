// src/pages/blog/BlogPost.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [postMeta, setPostMeta] = useState<{
    title: string;
    description: string;
    date: string;
    category?: string;
    featuredImage?: string;
  } | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();
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
    return <div className="text-center py-20 text-gray-700 dark:text-gray-300">Loading post...</div>;
  }

  if (!postMeta) {
    return <div className="text-center py-20 text-gray-700 dark:text-gray-300">Post not found</div>;
  }

  return (
    <div className="transition-colors duration-300">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/95 pt-36 pb-20 text-white">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-bharat-saffron/20 text-bharat-saffron px-4 py-2 rounded-full text-sm font-medium mb-4">
              {postMeta.category || "Featured"}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 drop-shadow-lg">
              {postMeta.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
              {postMeta.description}
            </p>
            <p className="text-gray-400">{postMeta.date}</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container-custom max-w-4xl mx-auto px-6">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container-custom max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how The Ad Project can revolutionize your brand's outdoor presence with cutting-edge 3D billboard technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
            </Link>
            <Link
              to="/ad-spaces"
              className="bg-white text-bharat-navy hover:bg-gray-100 font-semibold py-4 px-8 rounded-md shadow-md transition duration-300"
            >
              Explore Ad Spaces
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

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
