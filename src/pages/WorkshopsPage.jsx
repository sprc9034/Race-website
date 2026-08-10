import React, { useEffect, useState } from 'react';

export default function WorkshopsPage({ onOpenRegister }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    // Google Apps Script Web App URL
    const API_URL = "https://script.google.com/macros/s/AKfycbzp1uGRci0Gzq8TST6SeVSQwBrzFV0uKfv0hOkm-lUrO1pQUAuWAY3B1WTXA030IFdf/exec";

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReports(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reports from Drive:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="workshops" className="bg-race-darker text-race-silver py-16 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-race-cyan text-xs font-semibold uppercase tracking-widest">
              Club Activities & Reports
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Past Workshops Showcase
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Click on any workshop card below to read the official event report.
            </p>
          </div>

          <button
            onClick={() => onOpenRegister && onOpenRegister()}
            className="bg-race-cyan hover:bg-race-cyan/90 text-race-darker font-bold px-6 py-3 rounded-xl text-sm transition transform active:scale-95 cursor-pointer shadow-lg shadow-race-cyan/10 self-start md:self-auto whitespace-nowrap"
          >
            ⚡ Register for Next Workshop
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-16 text-slate-400">
            Fetching reports from Google Drive…
          </div>
        ) : (
          /* Report Cards Grid */
          <div className="grid md:grid-cols-3 gap-8">
            {reports.map((report) => (
              <article 
                key={report.id}
                onClick={() => setSelectedReport(report)}
                className="bg-race-dark/40 backdrop-blur-sm rounded-2xl border border-race-border p-6 hover:border-race-cyan/50 transition duration-300 shadow-xl cursor-pointer flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <span className="bg-race-cyan/10 text-race-cyan border border-race-cyan/30 text-[10px] font-semibold px-2.5 py-1 rounded-md inline-block">
                    📄 Official Report
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-race-cyan transition">
                    {report.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-race-border/50 flex justify-between items-center text-xs font-semibold text-race-cyan">
                  <span>Read Event Report</span>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* iFrame Viewer Modal for Document Preview */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-race-dark border border-race-border rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden relative shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-race-border flex justify-between items-center bg-race-darker">
              <h3 className="text-lg font-bold text-white truncate pr-4">
                {selectedReport.title}
              </h3>
              <button
                onClick={() => setSelectedReport(null)}
                className="text-slate-400 hover:text-white text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Google Drive Document iFrame */}
            <div className="flex-1 w-full h-full bg-white">
              <iframe
                src={selectedReport.previewUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title={selectedReport.title}
              >
                Loading Document…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}