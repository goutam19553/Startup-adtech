export const blogPosts = [
  {
    slug: "3d-billboards-rise",
    title: "🚀 The Rise of 3D Billboards in India",
    date: "July 27, 2025",
    Component: () => import("./threeDBillboards"),
  },
  {
    slug: "ar-outdoor-ads",
    title: "🔍 How AR is Enhancing Outdoor Advertising",
    date: "July 20, 2025",
    Component: () => import("./arAdvertising"),
  },
  {
    slug: "physical-vs-digital-ads",
    title: "🌍 Why Physical Ads Still Rule in the Digital Age",
    date: "July 15, 2025",
    Component: () => import("./physicalVsDigital"),
  },
];
