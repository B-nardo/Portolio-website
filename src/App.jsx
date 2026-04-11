import { ThemeProvider } from "./context/ThemeContext";
import Navbar   from "./components/layout/Navbar";
import Footer   from "./components/layout/Footer";
import Hero     from "./sections/Hero";
import About    from "./sections/About";
import Projects      from "./sections/Projects";
import CaseStudies   from "./sections/CaseStudies";
import Skills        from "./sections/Skills";
import Contact  from "./sections/Contact";

function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[80rem] aspect-square grid-bg"
        style={{
          left: "50%", top: "50%",
          transform: "translate(-50%,-50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
        }}
      />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent to-slate-50/80 dark:to-zinc-950/80" />
    </div>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans">
      <GridBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}