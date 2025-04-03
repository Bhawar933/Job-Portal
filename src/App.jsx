import React from "react";
import "./App.css";
import Home from "./components/layouts/pages/Home";
import About from "./components/layouts/pages/About";
import { Route, Routes } from "react-router";
import Blog from "./components/layouts/pages/Blog";
import Contact from "./components/layouts/pages/Contact";
import Elements from "./components/layouts/pages/Elements";
import Job_details from "./components/layouts/pages/Job_details";
import Job_listing from "./components/layouts/pages/Job_listing";
import Single_Blog from "./components/layouts/pages/Single_Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Job_listing />} />
        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<Single_Blog />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/job_details" element={<Job_details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
