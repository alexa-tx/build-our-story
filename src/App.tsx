import { useState } from "react";
import { Terminal } from "./components/Terminal";
import { LovePage } from "./components/LovePage";

export default function App() {
  const [showLovePage, setShowLovePage] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-green-400 font-mono flex items-center justify-center p-6">
      {showLovePage ? (
        <LovePage />
      ) : (
        <Terminal onFinish={() => setShowLovePage(true)} />
      )}
    </div>
  );
}
