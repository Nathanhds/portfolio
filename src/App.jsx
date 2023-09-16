import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";

export default function App() {
  return (
    <>
      <Header />
      <MobileHeader />
      <Introduction / >
      <Experience />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}