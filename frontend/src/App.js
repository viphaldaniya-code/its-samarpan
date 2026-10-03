import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "@/lib/SmoothScroll";
import ScrollToTop from "@/components/site/ScrollToTop";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Doctors } from "@/components/site/Doctors";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import DoctorsPage from "@/pages/DoctorsPage";
import GalleryPage from "@/pages/GalleryPage";
import BlogListPage from "@/pages/BlogListPage";
import BlogPostPage from "@/pages/BlogPostPage";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadingTimer;
    const finishLoading = () => setIsLoading(false);

    if (document.readyState === "complete") {
      loadingTimer = window.setTimeout(finishLoading, 500);
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    loadingTimer = window.setTimeout(finishLoading, 10_000);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(loadingTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-pearl/90 px-6 backdrop-blur-md">
      <div className="flex flex-col items-center text-center">
        <div className="loading-logo-shell">
          <img
            src="/samarpan-logo.webp"
            alt="Samarpan Hospital"
            className="h-24 w-auto object-contain sm:h-28"
          />
        </div>
        <p className="mt-6 max-w-xs text-center text-xs font-medium uppercase tracking-[0.16em] text-brand sm:max-w-md">
          Best NeuroSpine and Multispecility Hospital in Ajmer
        </p>
        <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-brand/10">
          <div className="loading-progress h-full rounded-full bg-brand" />
        </div>
      </div>
    </div>
  );
}

const HomePage = () => (
  <SmoothScroll>
    <div className="min-h-screen bg-background text-foreground" data-testid="home-page">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Doctors />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  </SmoothScroll>
);

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
