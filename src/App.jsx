import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // <--- Change to HashRouter
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopsPage from './pages/WorkshopsPage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  // ... keep existing state and handleOpenForm code ...

  return (
    <Router>
      <div className={`${theme} min-h-screen bg-race-darker text-race-silver font-sans transition-colors duration-300 flex flex-col justify-between`}>
        <div>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenRegister={() => handleOpenForm(MASTER_REGISTRATION_FORM_URL, "Workshop Registration")} 
                />
              } 
            />
            <Route 
              path="/workshops" 
              element={<WorkshopsPage onOpenRegister={handleOpenForm} />} 
            />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer />

{/* Reusable iFrame Registration / Feedback Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-3 sm:p-6">
    <div className="bg-race-dark border border-race-border rounded-2xl w-full max-w-3xl h-[90vh] max-h-[800px] flex flex-col overflow-hidden relative shadow-2xl">
      
      {/* Modal Header */}
      <div className="px-6 py-4 border-b border-race-border flex justify-between items-center bg-race-darker flex-shrink-0">
        <h3 className="text-lg font-bold text-white tracking-tight">{modalTitle}</h3>
        <button 
          onClick={() => setIsModalOpen(false)} 
          className="text-slate-400 hover:text-white text-xl font-bold p-1 cursor-pointer transition"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Google Form iFrame Container */}
      <div className="flex-1 w-full bg-white relative overflow-hidden">
        <iframe 
          src={activeFormUrl} 
          className="w-full h-full border-0"
          title="Google Registration Form"
          loading="lazy"
        >
          Loading form…
        </iframe>
      </div>

    </div>
  </div>
)}
      </div>
    </BrowserRouter>
  );
}