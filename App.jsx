import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx'; // Import from previous generation
import CONFIG from './config.js'; // Import from previous generation

// Home component (inspired by original index.html)
const Home = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: CONFIG.colors.secondary, color: CONFIG.colors.text }}>
    <header style={{ backgroundColor: CONFIG.colors.primary, color: CONFIG.colors.white, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>{CONFIG.appName}</h2>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li><Link to="/courses" style={{ color: CONFIG.colors.white, textDecoration: 'none' }}>Courses</Link></li>
          <li><Link to="/about" style={{ color: CONFIG.colors.white, textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/community" style={{ color: CONFIG.colors.white, textDecoration: 'none' }}>Community</Link></li>
          <li><Link to="/dashboard" style={{ color: CONFIG.colors.white, textDecoration: 'none' }}>Dashboard</Link></li>
        </ul>
      </nav>
    </header>

    <section style={{ backgroundColor: CONFIG.colors.accent, textAlign: 'center', padding: '50px 20px' }}>
      <h1>Learn Languages for Free</h1>
      <p>Thousands of interactive lessons to master {CONFIG.languages.map(lang => lang.label).join(', ')}, and more. Join millions learning worldwide.</p>
      <button style={{ backgroundColor: CONFIG.colors.primary, color: CONFIG.colors.white, padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Get Started</button>
    </section>

    {/* Additional sections can be added here, similar to index.html */}

    <footer style={{ backgroundColor: CONFIG.colors.primary, color: CONFIG.colors.white, textAlign: 'center', padding: '10px', marginTop: '40px' }}>
      <p>&copy; {CONFIG.copyrightYear} {CONFIG.appName}. All rights reserved.</p>
    </footer>
  </div>
);

// Placeholder components for other routes
const Courses = () => <div style={{ padding: '20px' }}><h1>Courses Page</h1><p>Browse all available language courses.</p></div>;
const About = () => <div style={{ padding: '20px' }}><h1>About Us</h1><p>Learn more about Free Language School.</p></div>;
const Community = () => <div style={{ padding: '20px' }}><h1>Community</h1><p>Join discussions and events.</p></div>;

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: CONFIG.colors.secondary }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
