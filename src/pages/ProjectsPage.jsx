import React, { useState } from 'react';

export default function ProjectsPage() {
  const [userInput, setUserInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const API_URL = "https://script.google.com/macros/s/AKfycbxdIVVwsAfTV1qL75t1LIti0Hvz05pQpTVMHNfYeyaavNDw94SS9Jy9xdGXxS2MVQFOPw/exec"; // Replace URL

  const handleUnlock = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    setError('');

    // Pass the entered passcode as a query parameter
    fetch(`${API_URL}?passcode=${encodeURIComponent(userInput.trim())}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setIsAuthenticated(true);
          setProjects(data.projects || []);
        } else {
          setError("Invalid passcode. Please check with a RACE Club admin.");
        }
      })
      .catch((err) => {
        console.error("Error verifying passcode:", err);
        setLoading(false);
        setError("Failed to verify passcode. Please try again.");
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 text-race-silver">
      <div className="text-center mb-10">
        <span className="text-race-red text-xs font-semibold uppercase tracking-widest">
          Restricted Access
        </span>
        <h1 className="text-4xl font-extrabold text-white mt-1">Club Projects Archive</h1>
      </div>

      {/* Lock Screen */}
      {!isAuthenticated ? (
        <div className="max-w-md mx-auto bg-race-dark/50 backdrop-blur-md p-8 rounded-2xl border border-race-border shadow-2xl text-center space-y-6">
          <span className="text-3xl">🔒</span>
          <h2 className="text-xl font-bold text-white">Enter Access Passcode</h2>

          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter passcode"
              className="w-full bg-race-darker border border-race-border rounded-xl p-3 text-center text-xl font-mono tracking-widest text-white focus:outline-none focus:border-race-cyan"
            />

            {error && <p className="text-race-red text-xs">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-race-cyan text-race-darker font-bold py-3 rounded-xl text-sm transition transform active:scale-95 cursor-pointer shadow-lg shadow-race-cyan/10 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Unlock Projects"}
            </button>
          </form>
        </div>
      ) : (
        /* Unlocked PDF Gallery */
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedPdf(proj)}
              className="bg-race-dark/40 rounded-2xl border border-race-border p-6 hover:border-race-cyan/50 transition cursor-pointer flex flex-col justify-between space-y-4 shadow-xl group"
            >
              <h3 className="text-lg font-bold text-white group-hover:text-race-cyan transition">
                {proj.title}
              </h3>
              <span className="text-xs font-semibold text-race-cyan">View PDF →</span>
            </div>
          ))}
        </div>
      )}

      {/* PDF iFrame Modal Viewer */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-race-dark border border-race-border rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative shadow-2xl">
            <div className="px-6 py-4 border-b border-race-border flex justify-between items-center bg-race-darker">
              <h3 className="text-lg font-bold text-white truncate pr-4">{selectedPdf.title}</h3>
              <button onClick={() => setSelectedPdf(null)} className="text-slate-400 hover:text-white text-xl font-bold p-1 cursor-pointer">
                ✕
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-white">
              <iframe src={selectedPdf.previewUrl} width="100%" height="100%" frameBorder="0" title={selectedPdf.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}