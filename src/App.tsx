import { useDarkMode } from './hooks/useDarkMode';
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
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      {/* Navbar */}
      <Navbar isDark={isDark} toggleDarkMode={toggle} />

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
