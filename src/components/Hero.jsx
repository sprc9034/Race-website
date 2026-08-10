import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero({ onOpenRegister }) {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-race-darker text-race-silver py-24 px-6 text-center border-race-border relative overflow-hidden">
      {/* Subtle Cyan background glow effect */}
      <div className="absolute inset-0 bg-race-cyan/5 blur-3xl rounded-full scale-150 transform -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-tight">
          Where <span className="text-race-red">Robotics</span> Meets <span className="text-race-cyan">Code</span>
        </h1>
        
        <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          The central hub for hands-on technical workshops and project collaboration at your college. Built by Engineers, for Engineers.
        </p>
        
        <div className="flex justify-center gap-4 pt-6">
          {/* Triggers Google Registration Form Modal */}
          <button
            type="button"
            onClick={() => onOpenRegister && onOpenRegister()}
            className="bg-race-cyan hover:bg-race-cyan/90 text-race-darker font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Register for Workshops
          </button>

          {/* Navigates smoothly to /projects */}
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="bg-transparent hover:bg-race-border/50 text-race-silver font-semibold px-8 py-3.5 rounded-xl border border-race-border transition-colors cursor-pointer"
          >
            Our Projects
          </button>
        </div>
      </div>
    </section>
  );
}