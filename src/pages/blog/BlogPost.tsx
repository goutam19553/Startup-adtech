import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Smartphone, BarChart2, Leaf, ArrowRight } from 'lucide-react';

type BlogPostProps = {
  children?: ReactNode;
};

const BlogPost = ({ children }: BlogPostProps) => {
  return (
    <article className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-900/90 py-20 text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How 3D Billboards Are Changing <br />
            <span className="text-yellow-500">The Advertising Game</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            The Ad Project is pioneering India's advertising revolution with hyper-real 3D experiences that command attention and drive virality
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-6 py-12 bg-white dark:bg-gray-900">
        <section>
          <h2 className="text-3xl font-bold mb-6">The Advertising Revolution</h2>
          <p className="text-lg mb-6">
            The world of outdoor advertising is undergoing a dramatic transformation, and at the heart of this change is the rise of <strong>3D billboards</strong>—hyper-real, eye-popping, and impossible to ignore. These larger-than-life installations are doing far more than just displaying ads—they're pulling people into immersive brand stories.
          </p>
          <p className="text-lg mb-12">
            In 2025, The Ad Project is pioneering this revolution across India, turning traditional hoardings into dynamic, data-driven experiences that make people stop, stare, and share.
          </p>

          <figure className="my-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/posts/3d-billboard-demo.jpg"
              alt="3D Billboard in action"
              width={1200}
              height={630}
              className="w-full"
            />
            <figcaption className="text-center mt-3 text-gray-500 dark:text-gray-400">
              Our 3D installation creating buzz at Connaught Place, Delhi
            </figcaption>
          </figure>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Makes 3D Billboards Special?</h2>
          
          <div className="bg-teal-100/10 dark:bg-gray-800 p-8 rounded-2xl mb-12 border border-teal-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
              What Are 3D Billboards?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              3D billboards combine anamorphic illusions, augmented reality (AR), and next-gen display tech to trick the eye into seeing three dimensions on a two-dimensional screen. From a perfect viewing angle, these ads appear to leap out of their frames—delivering unforgettable visual impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4 font-semibold">
              They're not just signs; they're spectacles.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our 3D Billboard Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            {[
              {
                icon: '🌀',
                title: 'Anamorphic 3D',
                desc: 'Depth and perspective tricks that make visuals pop when viewed from strategic angles.'
              },
              {
                icon: '🤝',
                title: 'Interactive AR',
                desc: 'Motion sensors and QR codes unlock bonus content, turning passive viewers into active participants.'
              },
              {
                icon: '✨',
                title: 'Holographic',
                desc: 'Floating visuals that defy convention, ideal for luxury brands and high-impact launches.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why 3D Billboards Deliver Results</h2>
          
          {[
            {
              icon: '🔥',
              title: 'Maximum Attention, Minimal Time',
              desc: 'A standard billboard may get a glance—our 3D billboards hold attention for 4–6 seconds longer, delivering more impact in less time.'
            },
            {
              icon: '💡',
              title: 'Deeper Brand Connection',
              desc: 'With immersive visuals and creative storytelling, these billboards generate 47% higher brand recognition and 20% higher purchase intent (Nielsen).'
            },
            {
              icon: '📈',
              title: 'Better ROI',
              desc: '3D campaigns prove 30% more effective than traditional outdoor ads in audience targeting and message delivery.'
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="bg-yellow-500/10 dark:bg-gray-800 p-6 rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/5 to-teal-500/5 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl my-12 border border-blue-900/10 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Leading India's 3D Billboard Movement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As India's premier ad-tech platform for physical ad innovation, we combine:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target className="h-5 w-5 text-yellow-500" />,
                  title: 'AI-Powered Targeting',
                  desc: 'Real-time content optimization based on audience analytics'
                },
                {
                  icon: <Smartphone className="h-5 w-5 text-yellow-500" />,
                  title: 'AR Integrations',
                  desc: 'Seamless bridge between physical and digital experiences'
                },
                {
                  icon: <BarChart2 className="h-5 w-5 text-yellow-500" />,
                  title: 'Real-Time Analytics',
                  desc: 'Precise measurement of engagement and impact'
                },
                {
                  icon: <Leaf className="h-5 w-5 text-yellow-500" />,
                  title: 'Eco-Conscious Materials',
                  desc: 'Sustainable solutions without compromising impact'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 dark:bg-yellow-500/30 p-2 rounded-full mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-yellow-500 text-white"
          >
            Schedule Your 3D Demo Today
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </article>
  );
};

export default BlogPost;
