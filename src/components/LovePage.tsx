import { useEffect, useState } from "react";

const hearts = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100 + "%",
  delay: Math.random() * 5,
  size: Math.random() * 6 + 4,
}));

export function LovePage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-6 overflow-hidden">

      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`absolute text-pink-400 animate-fall`}
          style={{
            left: heart.left,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          💖
        </span>
      ))}

      <div
        className={`max-w-3xl text-center text-white space-y-6 transition-all duration-700 ${
          showText ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h1 className="text-4xl font-bold text-green-400 mb-6">
          💙
        </h1>
        <p className="text-lg hover:text-pink-400 hover:scale-105 transition-all duration-300">
          Дорогой Рома, я очень люблю тебя и дорожу тобой.
          Спасибо тебе за то, что ты стараешься делать для меня и делаешь меня счастливой.
          Ты у меня самый лучший, красивый и умный парень на свете.
        </p>
        <p className="text-lg hover:text-pink-400 hover:scale-105 transition-all duration-300">
          Я сделала это, чтобы показать тебе свою любовь, хоть я и не умею правильно это выражать словами.
          Но что я точно умею — это любить тебя всем сердцем.
        </p>
        <p className="text-lg hover:text-pink-400 hover:scale-105 transition-all duration-300">
          Мы соберем нашу историю вместе, шаг за шагом, день за днем.
          Преодолеем все трудности.
          Я очень хочу и верю, что у нас всё получится, и мы будем вместе жить в гармонии и счастье.
        </p>
      </div>

      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
          }
          .animate-fall {
            animation: fall 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
