import { motion } from "framer-motion";

export default function AnimatedHeroText() {
  return (
    <main className="w-full bg-[#09090b] h-screen flex justify-center items-center">
      <div className="hero max-w-[600px]">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-[Inter_Var] text-center"
        >
          An e-commerce skateshop built with everything new in Next.js
        </motion.h1>
        <motion.p
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
          className="text-center mt-5 text-gray-500 text-[18px]"
          //   style={fadeUpStyles}
        >
          Buy and sell skateboarding gears from independent brands and stores
          around the world with ease
        </motion.p>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          }}
          className="flex gap-3 justify-center mt-4"
        >
          <button className="px-3 py-2 text-[13px] bg-white text-black rounded-md">
            Buy now
          </button>
          <button className="px-3 py-2 text-[13px]  text-white rounded-md border border-gray-600">
            Sell now
          </button>
        </motion.div>
      </div>
    </main>
  );
}
