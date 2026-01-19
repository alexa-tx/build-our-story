import { useEffect, useState } from "react";
import { ModuleCard } from "./ModuleCard";

type TerminalProps = {
  onFinish: () => void;
};

const modules = [
  { title: "You", content: "Самый лучший муж" },
  { title: "Me", content: "Мне очень повезло с тобой" },
  { title: "Us", content: "Мы создаем что-то вместе" },
];

export function Terminal({ onFinish }: TerminalProps) {
  const [visibleModules, setVisibleModules] = useState<number>(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (visibleModules < modules.length) {
      const timer = setTimeout(() => {
        setVisibleModules(visibleModules + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => setShowFinal(true), 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [visibleModules]);

  const handleModuleClick = () => {
  };

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black text-green-400 font-mono rounded-xl shadow-2xl p-6 max-w-xl w-full mx-auto hover:scale-105 transition-transform">
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></span>
      </div>

      {modules.slice(0, visibleModules).map((mod, i) => (
        <ModuleCard
          key={i}
          title={mod.title}
          content={mod.content}
          onClickModule={handleModuleClick}
        />
      ))}

      {showFinal && (
  <>
    <div className="text-white font-bold text-center mt-4 text-2xl animate-bounce">
      Story Built Successfully!
    </div>
    <button
      className="mt-6 px-6 py-3 font-bold rounded-xl bg-pink-500 text-white shadow-lg relative overflow-hidden hover:scale-110 hover:shadow-2xl transition-transform duration-300"
      onClick={onFinish}
    >
      Перейти к главному

      <span className="absolute top-0 left-1/2 w-2 h-2 bg-pink-300 rounded-full animate-bounce opacity-70"></span>
      <span className="absolute top-2 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-bounce opacity-70 delay-150"></span>
      <span className="absolute top-3 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-bounce opacity-70 delay-300"></span>
    </button>
  </>
)}

    </div>
  );
}
