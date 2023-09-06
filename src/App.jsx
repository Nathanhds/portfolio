import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Introduction / >
      <Experience />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}