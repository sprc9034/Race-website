import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-race-dark text-race-silver px-6 py-8 flex justify-between items-center border-b border-race-border sticky top-0 z-40 transition-colors duration-300">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg border border-race-border bg-race-darker hover:border-race-cyan text-race-silver transition cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="flex flex-col items-center text-center">
          <img 
            src={`${import.meta.env.BASE_URL}racelogo.png`} 
            alt="RACE Club Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="text-[12px] text-slate-400 font-medium tracking-wide uppercase hidden sm:inline">
            Robotics • Automation • Coding • Engineers
          </span>
        </Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 rounded-lg border border-race-border bg-race-darker text-xs font-semibold hover:border-race-cyan transition cursor-pointer"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

      {/* Side Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 left-0 h-full w-72 bg-race-dark border-r border-race-border z-50 transform transition-transform duration-300 p-6 flex flex-col justify-between ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          <div className="flex justify-between items-center mb-8 border-b border-race-border pb-4">
            <span className="text-lg font-bold text-race-cyan tracking-wider">NAVIGATION</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white text-xl font-bold cursor-pointer">
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-4 text-base font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-lg hover:bg-race-darker hover:text-race-cyan transition">
              Home
            </Link>
            <Link to="/workshops" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-lg hover:bg-race-darker hover:text-race-cyan transition">
              Workshops
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-lg hover:bg-race-darker hover:text-race-cyan transition">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}