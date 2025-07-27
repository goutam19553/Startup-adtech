// src/App.tsx
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import AIAnalytics from "./pages/AIAnalytics";
import DesktopNotice from "./components/DesktopNotice";

// Lazy-loaded pages
const AdSpaces = lazy(() => import("./pages/AdSpaces"));
const Advertisers = lazy(() => import("./pages/Advertisers"));
const AdSpaceOwners = lazy(() => import("./pages/AdSpaceOwners"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdSpaceUpload = lazy(() => import("./pages/AdSpaceUpload"));
const GovernmentSupportPage = lazy(() => import("./pages/GovernmentSupportPage"));

// Blog pages
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <DesktopNotice />
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/ad-space-owners" element={<AdSpaceOwners />} />
                  <Route path="/ad-spaces" element={<AdSpaces />} />
                  <Route path="/ai-analytics" element={<AIAnalytics />} />
                  <Route path="/advertisers" element={<Advertisers />} />
                  <Route path="/ad-space-upload" element={<AdSpaceUpload />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/government-support" element={<GovernmentSupportPage />} />

                  {/* Blog Routes */}
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />

                  {/* Catch-all for unknown routes */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
