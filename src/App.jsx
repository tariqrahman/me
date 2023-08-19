import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/landing.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Projects from "./components/projects.jsx";
import Nav from "./components/nav";
import Footer from "./components/footer.jsx";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {currentPath !== "/" && <Footer />}
    </>
  );
}

export default App;
