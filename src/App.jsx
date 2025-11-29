import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './sections/About';
import Roster from './sections/Roster';
import Collab from './sections/Collab';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-medical-blue/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roster />
        <Collab />
      </main>
      <Footer />
    </div>
  );
}

export default App;
