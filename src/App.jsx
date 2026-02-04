import React, { useState } from 'react';
import './App.css';

// Layout
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

// Sections
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Roster from './sections/Roster';
import Paradox from './sections/Paradox';
import Collaboration from './sections/Collaboration';

// Components
import AgentModal from './components/AgentModal';

function App() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      
      {/* Global Modal Layer */}
      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}

      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Mission />
        <Roster onSelectAgent={setSelectedAgent} />
        <Paradox />
        <Collaboration />
      </main>

      <Footer />
    </div>
  );
}

export default App;