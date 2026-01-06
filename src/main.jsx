import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import SkillSet from "./components/SkillSet";
import AllProjects from "./components/AllProjects";
import MoreAboutMe from "./components/MoreAboutMe";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/skillset" element={<SkillSet />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/aboutme" element={<MoreAboutMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
