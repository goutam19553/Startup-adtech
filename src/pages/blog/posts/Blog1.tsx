import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Blog1 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const Spinner3D = () => (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 z-50">
      <div className="w-20 h-20 perspective">
        <div className="cube">
          <div className="face front bg-bharat-teal" />
          <div className="face back bg-bharat-navy" />
          <div className="face right bg-bharat-teal/80" />
          <div className="face left bg-bharat-teal/80" />
          <div className="face top bg-bharat-teal/60" />
          <div className="face bottom bg-bharat-teal/60" />
        </div>
      </div>
      <style>{`
        .perspective { perspective: 800px; }
        .cube {
          width: 80px; height: 80px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 1.8s linear infinite;
        }
        .face {
          position: absolute;
          width: 80px; height: 80px;
          opacity: 0.9;
          border: 2px solid #14b8a6;
        }
        .front  { transform: translateZ(40px); }
        .back   { transform: rotateY(180deg) translateZ(40px); }
        .right  { transform: rotateY(90deg) translateZ(40px); }
        .left   { transform: rotateY(-90deg) translateZ(40px); }
        .top    { transform: rotateX(90deg) translateZ(40px); }
        .bottom { transform: rotateX(-90deg) translateZ(40px); }

        @keyframes spinCube {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );

  if (loading) return <Spinner3D />;

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <Helmet>
        <title>How 3D Billboards Are Changing Advertising in 2025 | The Ad Project</title>
        <meta name="description" content="Explore how The Ad Project is revolutionizing Indian outdoor advertising with 3D billboards, driving deeper brand engagement and innovation." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-bharat-teal">How 3D Billboards Are Changing the Game in 2025</h1>
        <p className="text-sm text-gray-400 mb-8">Published on July 26, 2025</p>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Outdoor advertising in India is undergoing a major shift — and at the center of this transformation is The Ad Project.
            We’re not just putting up billboards. We’re engineering spectacles that stop people in their tracks.
          </p>

          <p>
            Our 3D billboards create illusions that leap off the screen, merging the digital and physical world in breathtaking ways.
            Whether it’s a sneaker bursting out of a building or a tiger roaring in mid-air on a city square — these visuals are not just eye-catching, they’re unforgettable.
          </p>

          <p>
            Brands using these immersive 3D experiences have seen <strong>3–5x higher engagement</strong> compared to traditional static ads.
            It’s not just advertising anymore — it’s storytelling at a massive scale.
          </p>

          <p>
            The Ad Project is leading this 3D revolution across major cities like Mumbai, Bangalore, Pune, and Hyderabad.
            With AR integrations and smart performance tracking, our approach combines visual drama with data-driven impact.
          </p>

          <p>
            This is more than a campaign. It’s the future of outdoor advertising in India — and it’s already here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
