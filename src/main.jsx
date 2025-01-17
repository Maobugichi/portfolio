import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css";
import SkillSet from "./components/SkillSet";
import AllProjects from "./components/AllProjects";
import MoreAboutMe from "./components/MoreAboutMe";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
      <HashRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/portfolio/skillset/" element={<SkillSet/>} />
          <Route path="/portfolio/allprojects/" element={<AllProjects/>} />
          <Route path="/portfolio/aboutme/" element={<MoreAboutMe/>} />
        </Routes>
      </HashRouter>
  </React.StrictMode>
);
