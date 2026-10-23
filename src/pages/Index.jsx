import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
// Lazy loading the sections that are "below the fold"
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const TechStack = lazy(() => import("@/components/TechStack"));
const Footer = lazy(() => import("@/components/Footer"));
const StarBackground = lazy(() => import("@/components/StarBackground"));
const Index = () => {
    useEffect(() => {
        // Ensures the scroll returns to the top when the page reloads
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);
    return (<div className="min-h-screen relative bg-white dark:bg-[#050505] text-foreground transition-colors duration-500">
      <Preloader />
      <Suspense fallback={<div className="fixed inset-0 bg-[#050505] pointer-events-none"/>}>
        <StarBackground />
      </Suspense>
      {/* Noise texture - pointer-events-none for performance */}
      <div className="fixed inset-0 z-[1] opacity-5 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.svg")' }}/>

      <Navbar />
      <BottomNav />

      <main className="relative z-10">
        {/* Hero is critical (LCP), so we keep it loading synchronously */}
        <Hero />

        {/* Suspense groups the loading of the secondary sections */}
        <Suspense fallback={null}>
          <Projects />
          <About />
          <Experience />
          <TechStack />
          <Footer />
        </Suspense>
      </main>
    </div>);
};
export default Index;
