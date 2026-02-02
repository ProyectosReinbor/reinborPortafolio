import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import AnimatedGrid from "./components/AnimatedGrid";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-black text-white min-h-screen overflow-hidden">
        {/* Background futurista */}
        <AnimatedGrid />

        {/* Contenido */}
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects />
                  <Content />
                </>
              }
            />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>

          <Footer />
        </main>
      </div>
    </BrowserRouter >
  );
}
