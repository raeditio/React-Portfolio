import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AIVision from './AIVision';
import SmartDesk from './SmartDesk';
import IFR6000 from './IFR6000';
import ProjectA from './ProjectA';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      {/* Main project list with links */}
      <Routes>
        {/* Main projects page - lists all projects */}
        <Route
          path="/"
          element={
            <ul>
              <li>
                <Link to="ai-Vision">AI Vision</Link>
              </li>
              <li>
                <Link to="smartDesk">Smart Desk</Link>
              </li>
              <li>
                <Link to="ifr6000">IFR 6000</Link>
              </li>
              <li>
                <Link to="projectA">Project A</Link>
              </li>
            </ul>
          }
        />

        {/* Routes for individual project pages */}
        <Route path="ai-Vision" element={<AIVision />} />
        <Route path="smartDesk" element={<SmartDesk />} />
        <Route path="ifr6000" element={<IFR6000 />} />
        <Route path="projectA" element={<ProjectA />} />
      </Routes>
    </div>
  );
}

export default Projects;
