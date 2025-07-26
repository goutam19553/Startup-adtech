import { Helmet } from "react-helmet-async";

const Blog1 = () => {
  console.log("✅ Blog1 component rendered");

  return (
    <div className="p-10 text-white">
      <Helmet>
        <title>How 3D Billboards Are Changing the Game | Blog</title>
        <meta name="description" content="How 3D billboards are transforming advertising in 2025." />
      </Helmet>
      <h1 className="text-3xl font-bold text-bharat-teal mb-4">
        How 3D Billboards Are Changing the Game
      </h1>
      <p>This is blog post 1. You should be able to see this content now.</p>
    </div>
  );
};

export default Blog1;
