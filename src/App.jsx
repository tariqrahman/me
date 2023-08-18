import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Projects from "./components/projects.jsx";
import Nav from "./components/nav";
import Footer from "./components/footer.jsx";
import ContactButton from "./components/contactButton.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
