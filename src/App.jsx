import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopsPage from './pages/WorkshopsPage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFormUrl, setActiveFormUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('Workshop Registration');

  // Master Google Form URL
  const MASTER_REGISTRATION_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_MASTER_FORM_ID_HERE/viewform?embedded=true";

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenForm = (formUrl, title = "Workshop Registration") => {
    // Falls back to MASTER_REGISTRATION_FORM_URL if formUrl is not a valid string
    const urlToLoad = (typeof formUrl === 'string' && formUrl) ? formUrl : MASTER_REGISTRATION_FORM_URL;
    setActiveFormUrl(urlToLoad);
    setModalTitle(title);
    setIsModalOpen(true);
  };

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
    </Router>
  );
}