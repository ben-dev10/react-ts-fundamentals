import { Check, CircleDollarSign } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { type RefObject } from "react";

interface Props {
  cursor: { x: number; y: number };
  cardRef: RefObject<HTMLElement>;
  mouseOnCard: boolean;
}

const Flame = ({ cursor, cardRef, mouseOnCard }: Props) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
      const cyPercentage = (cursor.y / cardRect.width) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, cardRef]);
  return (
    <svg viewBox="0 0 24 24" className="size-96 duration-200 transition-all">
      <defs>
        <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          // Center point of gradient
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
          r="35%"
        >
          {mouseOnCard && <stop stopColor="#10b981" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-950/50"
        stroke="url(#emeraldGradient)"
        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-800/50"
        stroke="url(#emeraldGradient)"
        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
      ></path>
    </svg>
  );
};

export default function SVGHoverEffect() {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <main className="w-full h-screen flex place-items-center justify-center">
      <section
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        ref={cardsRef}
        onMouseMove={(event) => {
          handleMouseMove(event);
        }}
        className="card w-[44rem] h-[26rem] bg-neutral-800 rounded-lg border border-neutral-600 flex 
        flex-row p-8 absolute justify-between stroke-[0.1] hover:stroke-[0.2]"
      >
        <div className="flex flex-col w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <CircleDollarSign
              size={56}
              className="rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner"
            />
            <h1 className="font-[Poppins] text-neutral-200 tracking-wide text-2xl">
              Database
            </h1>
            <p className="-mt-2 font-[Poppins] text-neutral-500 tracking-wide">
              Every project is a full Postgres database, the world's most
              trusted relational database.
            </p>
          </div>
          <div className="flex flex-col font-[Poppins] text-neutral-200 tracking-wide">
            <span className="flex flex-row items-center gap-2">
              <Check size={18} />
              <p>100% portable</p>
            </span>
            <span className="flex flex-row items-center gap-2">
              <Check size={18} />
              <p>Built-in Auth with RLS</p>
            </span>
            <span className="flex flex-row items-center gap-2">
              <Check size={18} />
              <p>Easy to extend</p>
            </span>
          </div>
        </div>
        <div className="w-3/5 flex flex-col place-items-center">
          <div className="big-svg">
            <Flame
              cursor={cursor}
              cardRef={cardsRef}
              mouseOnCard={mouseOnCard}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
