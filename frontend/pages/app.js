import '../styles/global.css'; // Global CSS file import
import Navbar from '../component/navbar';
import Hero from '../component/hero';
import About from '../component/about';
import Project from '../component/project';
import Contact from '../component/contact';

function MyApp() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default MyApp;
