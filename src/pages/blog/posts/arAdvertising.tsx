import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ARAdvertising = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen">
      <Helmet>
        <title>Augmented Reality Advertising in India | The Ad Project</title>
        <meta
          name="description"
          content="Discover how The Ad Project is revolutionizing advertising in India using immersive Augmented Reality (AR) experiences that bring physical ads to life."
        />
      </Helmet>

      <Link
        to="/blog"
        className="text-sm flex items-center gap-2 text-blue-400 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <img
        src="/3d.gif"
        alt="AR Ad Preview"
        className="rounded-2xl mb-8 w-full object-cover max-h-[480px]"
      />

      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        🌐 Augmented Reality Advertising: The Future is Now in India
      </h1>

      <p className="text-lg leading-8 mb-6 text-gray-300">
        Imagine standing at a bustling street corner. A vibrant poster on the wall catches your eye. You scan the QR code with your phone, and suddenly—your screen springs to life with a 3D animation of the product, its price, a buy-now button, and even a celebrity endorsement video playing on top of the wall.
        <br />
        This is not science fiction. This is **Augmented Reality (AR) advertising**, and it's already happening in India—led by the visionary team behind <strong>The Ad Project</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">📱 What Is AR Advertising?</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        AR advertising uses digital overlays to enhance physical ad placements. Using your smartphone or AR glasses, you can view content that adds a digital dimension to otherwise static ads. From interactive 3D models and animations to voice-over storytelling and real-time offers, AR makes every billboard a dynamic portal.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🇮🇳 Why India Needs AR in Outdoor Advertising</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        India, with its diverse languages, regional markets, and fast-growing smartphone penetration, is the perfect landscape for AR advertising. Traditional hoardings can’t carry multilingual messaging or personalized promotions—but AR can.
        <br />
        This means a brand can run one pan-India campaign and have the same hoarding deliver different messages based on region, language, or even user profile.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🚀 The Ad Project: Leading the AR Revolution</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        <strong>The Ad Project</strong> is India’s first full-scale, PAN-India platform to bring outdoor ads into the digital age. With AR-embedded QR codes placed on hoardings, kiosks, buses, malls, and walls, we make static physical surfaces come alive.
        <br />
        We integrate:
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
          <li>3D content over physical walls and posters</li>
          <li>Interactive CTAs like “Buy Now” or “Locate Store Nearby”</li>
          <li>AR storytelling via celebrities or animated characters</li>
          <li>Gamified experiences for higher engagement</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🎯 Impact & Use Cases</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        From FMCG to real estate, political campaigns to startups—AR ads give every brand a competitive edge.
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
        <li>🛍 A clothing brand can show a rotating 3D model of a new collection on a wall poster</li>
        <li>🏠 A real estate firm can offer virtual walk-throughs of under-construction apartments</li>
        <li>🎓 Educational institutions can let students preview courses in a holographic demo</li>
        <li>🗳 Political parties can explain their manifesto in local languages via AR avatars</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🔗 Scannable Ads: QR + AR = Magic</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        Every physical ad registered on The Ad Project’s platform is AR-ready. We print eco-friendly posters with built-in QR codes. When scanned, these ads open immersive AR experiences tailored to the campaign’s objective. No extra app download is needed—it runs directly in the browser.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🌱 Sustainable + Smart Advertising</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        We're not just innovating technologically—we’re doing it responsibly. The Ad Project ensures that AR ads are printed on fabric-based, biodegradable materials, helping cities reduce plastic ad waste while modernizing their appeal.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🌍 The Future: AR-First Campaign Planning</h2>
      <p className="text-base leading-7 text-gray-300 mb-6">
        As India leaps into the era of immersive tech, campaign managers will begin with AR-first strategies. The Ad Project already offers campaign previews in real-world maps, real-time footfall analytics, and wall-scanning tech to automatically detect ad spaces using AI.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">🙏 Join the Revolution</h2>
      <p className="text-base leading-7 text-gray-300 mb-12">
        AR is no longer optional—it's the new face of effective outdoor communication. Brands that embrace it early will win attention, trust, and market share.
        <br />
        <br />
        <strong>The Ad Project</strong> invites agencies, startups, brands, and government bodies to be part of India’s AR advertising movement.
        <br />
        <span className="block mt-6 font-semibold text-green-400">
          The walls are talking—are you listening?
        </span>
      </p>
    </div>
  );
};

export default ARAdvertising;

