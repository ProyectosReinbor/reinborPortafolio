import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Content from './components/Content'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Content />
      <Footer />
    </div>
  )
}