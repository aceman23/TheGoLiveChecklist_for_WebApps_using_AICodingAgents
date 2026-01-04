import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { GoLiveChecklist } from './components/GoLiveChecklist';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [showChecklist, setShowChecklist] = useState(false);

  if (!showChecklist) {
    return <LandingPage onGetStarted={() => setShowChecklist(true)} />;
  }

  return (
    <div>
      <button
        onClick={() => setShowChecklist(false)}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-white hover:shadow-md transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Back to Home</span>
      </button>
      <GoLiveChecklist />
    </div>
  );
}

export default App;
