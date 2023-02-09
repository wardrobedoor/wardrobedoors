import { useEffect } from "react";
import { VStack } from "@chakra-ui/layout";
import Aos from "aos";
import "aos/dist/aos.css";

// import About from "./components/About";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Project from "./components/Project";
// import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <VStack pt={2}>
      <Navbar></Navbar>
      <Header></Header>
      {/* <About></About>
      <Experience></Experience>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer> */}
    </VStack>
  );
}

export default App;
