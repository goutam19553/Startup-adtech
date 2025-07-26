import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Target, Smartphone, BarChart2, Leaf, ArrowRight } from 'lucide-react';

type PostMeta = {
  title: string;
  description: string;
  date: string;
  category?: string;
  featuredImage?: string;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [postMeta, setPostMeta] = useState<PostMeta | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();
        const { data, content } = parseFrontmatter(text);
        
        setPostMeta(data as PostMeta);
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

  // Custom components for ReactMarkdown
  const components = {
    img: ({ node, ...props }) => (
      <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img {...props} className="w-full" />
        {props.alt && (
          <figcaption className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
            {props.alt}
          </figcaption>
        )}
      </figure>
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl font-bold mt-12 mb-6 dark:text-white" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-xl font-semibold mt-8 mb-4 dark:text-white" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }) => (
      <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
    )
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
            {postMeta.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {postMeta.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 bg-white dark:bg-gray-900">
        {/* Render Markdown content */}
        <ReactMarkdown 
          components={components}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>

        {/* Special 3D Billboard Sections */}
        {slug === '3d-billboards-revolution' && (
          <>
            {/* Solutions Section */}
            <section className="my-16">
              <h2 className="text-3xl font-heading font-bold mb-8">Our 3D Billboard Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '🌀', title: 'Anamorphic 3D', desc: 'Depth illusions perfect for high-traffic locations' },
                  { icon: '🤝', title: 'Interactive AR', desc: 'QR codes unlock bonus content for engagement' },
                  { icon: '✨', title: 'Holographic', desc: 'Floating visuals for luxury brand launches' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Advantages Section */}
            <section className="my-16">
              <h2 className="text-3xl font-heading font-bold mb-8">The Ad Project Advantage</h2>
              <div className="bg-gradient-to-r from-bharat-navy/5 to-bharat-teal/5 dark:from-gray-800 p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <Target className="h-5 w-5 text-bharat-saffron" />, title: 'AI-Powered Targeting' },
                    { icon: <Smartphone className="h-5 w-5 text-bharat-saffron" />, title: 'AR Integrations' },
                    { icon: <BarChart2 className="h-5 w-5 text-bharat-saffron" />, title: 'Real-Time Analytics' },
                    { icon: <Leaf className="h-5 w-5 text-bharat-saffron" />, title: 'Eco-Conscious Materials' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-bharat-saffron/20 p-2 rounded-full mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all bg-bharat-saffron text-white"
              >
                Schedule Your 3D Demo Today
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </a>
            </div>
          </>
        )}
      </div>
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
