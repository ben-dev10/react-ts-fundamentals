import { easeInOut, motion } from "framer-motion";

const fadeUp = {
  y: [10, 0],
  opacity: [0, 0.6, 1],
};

const fadeUpTransition = {
  duration: 0.55,
  times: [0, 0.75, 1],
  ease: easeInOut,
};

export default function AnimatedHeroText() {
  return (
    <main className="w-full bg-[#09090b] h-screen flex justify-center items-center">
      <div className="hero max-w-[600px]">
        <motion.h1
          animate={fadeUp}
          transition={fadeUpTransition}
          className="text-5xl font-[Inter_Var] text-center"
        >
          An e-commerce skateshop built with everything new in Next.js
        </motion.h1>
        <motion.p
          animate={fadeUp}
          transition={{ delay: 0.25, ease: easeInOut, times: [0, 0.75, 1] }}
          className="text-center mt-5 text-gray-400 text-[18px] mx-auto max-w-[450px]"
        >
          Buy and sell skateboarding gears from independent brands and stores
          around the world with ease
        </motion.p>
        <motion.div
          animate={{ opacity: [0, 0.6, 1] }}
          transition={{ delay: 0.4, ease: easeInOut, times: [0, 0.75, 1] }}
          className="flex gap-3 justify-center mt-4"
        >
          <button className="px-3 py-2 text-[12px] bg-white text-black rounded-md">
            Buy now
          </button>
          <button className="px-3 py-2 text-[12px]  text-white rounded-md border border-gray-600">
            Sell now
          </button>
        </motion.div>
      </div>
    </main>
  );
}
