import React from "react";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-900 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          How 3D Billboards Are Revolutionizing Brand Engagement in 2025
        </h1>
        <p className="mb-4">
          In 2025, 3D billboards are no longer a futuristic concept — they are a
          <strong> reality transforming how brands engage with audiences in India and around the globe</strong>.
          From Times Square-style motion billboards in Mumbai to interactive hoardings in Bengaluru,
          3D Out-of-Home (OOH) advertising is grabbing attention like never before.
        </p>

        {/* 🎬 3D GIF Section */}
        <div className="my-6">
          <img
            src="/3d.gif"
            alt="3D Billboard Animation"
            className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 The Rise of 3D Billboards in India</h2>
        <p className="mb-4">
          Traditional billboard advertising has long been a trusted medium — visible, impactful, and
          cost-effective. However, as consumer attention spans shrink and digital experiences dominate,
          <strong> brands need more immersive and memorable formats</strong>.
        </p>
        <p className="mb-4">
          Enter <strong>3D anamorphic billboards</strong> — eye-catching, hyper-realistic visuals that appear to
          pop out of the screen. These billboards create depth perception without requiring 3D glasses,
          combining art, animation, and technology.
        </p>
        <p className="mb-4">
          In India, cities like Delhi, Mumbai, and Hyderabad are rapidly adopting this format in malls,
          junctions, airports, and highways.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🧠 Why 3D Billboards Work So Well</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Higher Retention:</strong> 3D visuals are 2x more memorable than flat designs.</li>
          <li><strong>Social Virality:</strong> Audiences stop, record, and share these experiences on social media.</li>
          <li><strong>Brand Perception:</strong> Associated with premium and innovative brands.</li>
          <li><strong>Foot Traffic Influence:</strong> Boost footfall by up to 25% in retail zones.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🏙 Real-World Examples in India</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Samsung Galaxy Flip in Mumbai:</strong> Showcased a phone flipping open in Bandra.</li>
          <li><strong>Netflix’s AR+3D combo in Delhi:</strong> Merged 3D visuals with mobile AR QR filters.</li>
          <li><strong>The Ad Project’s 3D Demo in Bengaluru:</strong> Preview tools to test 3D hoardings before booking.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🔧 How Your Brand Can Leverage 3D Ads</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Preview Before You Buy:</strong> Visualize your ads in 3D on real Indian streets.</li>
          <li><strong>Pan-India Availability:</strong> Access verified ad spaces across metro and tier-2 cities.</li>
          <li><strong>AR-Enhanced Engagement:</strong> QR-based AR boosts user interaction.</li>
          <li><strong>Eco-Friendly:</strong> Promotes sustainable digital fabric over plastic-based banners.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📈 The Business Impact</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-2 px-4 border border-gray-700">Metric</th>
                <th className="py-2 px-4 border border-gray-700">Traditional Billboard</th>
                <th className="py-2 px-4 border border-gray-700">3D Billboard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border border-gray-700">Avg. View Time</td>
                <td className="py-2 px-4 border border-gray-700">3–5 sec</td>
                <td className="py-2 px-4 border border-gray-700">8–12 sec</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-700">Engagement Rate</td>
                <td className="py-2 px-4 border border-gray-700">Low</td>
                <td className="py-2 px-4 border border-gray-700">Very High</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-700">Social Shares</td>
                <td className="py-2 px-4 border border-gray-700">Rare</td>
                <td className="py-2 px-4 border border-gray-700">Viral-worthy</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-700">ROI</td>
                <td className="py-2 px-4 border border-gray-700">Moderate</td>
                <td className="py-2 px-4 border border-gray-700">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🌐 The Future Is Now</h2>
        <p className="mb-6">
          3D billboards are more than just a trend — they’re a signal of where outdoor marketing is headed.
          In an increasingly cluttered media world, <strong>the brands that stand out are the ones that leap off the wall — literally</strong>.
        </p>
        <p className="mb-4">
          If you're ready to bring your brand to life in India’s most iconic spaces, let <strong>The Ad Project</strong> be your partner.
        </p>
        <a
          href="https://adproject.in"
          className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-80"
        >
          Start Your Campaign Today »
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
