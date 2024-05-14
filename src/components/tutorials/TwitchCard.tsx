// import "@/components/tutorials/styles/TwitchCard.css"
import { useEffect, useState } from "react";
import "./styles/TwitchCard.css";

export default function TwitchCard() {
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    const subTitleText =
      "Its surprisingly very easy to pull this off, entirely with pure CSS";
    const words = subTitleText.split(" ");
    setText(words);
  }, []);

  return (
    <main className="grid h-screen place-items-center">
      <div className="card aspect-[1/1.6] border-[0.5vmin] border-cyan-500 cursor-pointer relative w-[56vmin]">
        <div className="card-content p-8">
          <h3 className="text-4xl font-[Poppins] mt-4">
            Card Hover Effect Tutorial
          </h3>
          <p className="mt-3 subtitle">
            {text.map((word, index) => (
              <span
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
                className={`card-subtitle-word`}
                key={index}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </main>
  );
}
