import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from './components';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
