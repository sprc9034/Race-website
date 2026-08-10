import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-race-dark text-slate-500 text-xs text-center py-10 border-t border-race-border">
      <div className="max-w-5xl mx-auto space-y-2">
        <p className="font-semibold text-race-silver/70">
          RACE Club • Robotics Automation Coding Engineers
        </p>
        <p>© {new Date().getFullYear()} RACE Club. Engineering the future with passion.</p>
        <p className="text-slate-600">Contact: raceclub.edu@gmail.com | EL7 Lab, First floor, Main Campus</p>
      </div>
    </footer>
  );
}