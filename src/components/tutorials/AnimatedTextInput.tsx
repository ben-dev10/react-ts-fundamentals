import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedTextInput() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [textValue, setTextValue] = useState("");
  const rotateValue = Math.floor(Math.random() * 201 - 100);
  return (
    <div className="animated-text-input-tutorial p-5 flex flex-col">
      <p className="text-sm text-gray-400 mb-2">
        {" "}
        💡 Type in the input box below to see the typing animation.
      </p>
      <textarea
        onChange={(e) => setTextValue(e.target.value)}
        ref={textAreaRef}
        className="opacity-0 w-0 h-0 border"
      />
      <div
        onClick={() => {
          textAreaRef.current!.focus();
        }}
        className="min-h-60 border border-gray-500 rounded-sm text-slate-100 font-[Inter] font-bold whitespace-pre-wrap text-xl min-w-full p-5 overflow-x-hidden "
      >
        <AnimatePresence>
          {textValue.split("").map((letter, index) => {
            return (
              <motion.span
                initial={{ opacity: 0, y: 100, rotate: rotateValue }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{
                  opacity: 0,
                  y: 100,
                  transition: {
                    duration: 0.15,
                  },
                  rotate: rotateValue,
                }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                key={index}
                className={letter !== "\n" ? "inline-block mr-[0.5]" : "inline"}
              >
                {letter}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
