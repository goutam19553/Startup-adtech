import { Helmet } from 'react-helmet-async';

const Blog1 = () => {
  console.log("✅ Blog1 component loaded"); // ✅ Check this in browser console

  return (
    <div className="p-10 text-white">
      <Helmet>
        <title>3D Billboards Blog | The Ad Project</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-bharat-teal mb-4">How 3D Billboards Are Changing the Game</h1>
      <p>This is Blog 1 Content</p>
    </div>
  );
};

export default Blog1;
