import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Helmet } from "react-helmet";

const ThreeDBillboards = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.innerHTML = ""; // Clear any previous render
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Billboard (a simple box to represent a billboard)
    const geometry = new THREE.BoxGeometry(3, 2, 0.1);
    const material = new THREE.MeshStandardMaterial({ color: "#0099ff" });
    const billboard = new THREE.Mesh(geometry, material);
    scene.add(billboard);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      billboard.rotation.y += 0.005;
      billboard.rotation.x += 0.003;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 py-16">
      <Helmet>
        <title>The Rise of 3D Billboards in India | The Ad Project</title>
        <meta
          name="description"
          content="Discover how 3D billboards are transforming the landscape of Indian advertising. The Ad Project is leading the innovation."
        />
        <meta name="keywords" content="3D Billboard, India, AdTech, Innovation, The Ad Project" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          🚀 The Rise of 3D Billboards in India
        </h1>

        <div
          ref={mountRef}
          style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}
          className="mb-6 shadow-xl bg-black"
        />

        <article className="text-lg leading-relaxed space-y-6">
          <p>
            In the heart of India's bustling cities, a new trend is transforming how brands connect
            with people—3D billboards. These futuristic displays don't just catch your eye; they
            leap out of the skyline with immersive visuals that make passersby stop and stare.
          </p>

          <p>
            While traditional hoardings remain dominant, 3D billboard technology adds a dynamic
            twist. By using light, shadow, and illusion, they give the impression that objects are
            moving or floating outside the screen. Brands now have the power to deliver memorable
            experiences in real space—on highways, malls, or city intersections.
          </p>

          <p>
            But there's a catch: not everyone has access to this cutting-edge tech. That's where{" "}
            <strong>The Ad Project</strong> is changing the game. We're democratizing 3D outdoor
            advertising across India—bringing these experiences not just to megacities but also to
            Tier II and Tier III towns.
          </p>

          <p>
            With our centralized platform, brands can now book 3D-enabled billboard spaces
            remotely, preview their ad creatives in real-time, and use data insights to measure
            engagement. We're also working with space owners to install 3D-compatible screens and
            train local technicians—creating a new digital infrastructure for India’s physical ad
            world.
          </p>

          <p>
            Our goal is to empower brands with immersive storytelling and help Indian cities shine
            with innovative, interactive advertising. 3D billboards are just the beginning.
          </p>

          <p className="font-semibold text-xl">
            The future of physical ads is immersive—and The Ad Project is building it.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ThreeDBillboards;
