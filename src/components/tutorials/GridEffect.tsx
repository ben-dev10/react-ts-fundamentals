import { motion } from "framer-motion";

const Tile = () => {
  return (
    // <div className="aspect-square bg-neutral-950 border-neutral-900 hover:bg-indigo-600 transition-colors duration-100"></div>
    <motion.div
      whileHover={{ zIndex: 1, backgroundColor: "#7c3aed" }}
      transition={{ duration: 5, ease: "easeOut" }}
      className="aspect-square bg-neutral-950 border-neutral-900"
    ></motion.div>
  );
};

export default function GridEffect() {
  return (
    <div className="GridEffect-tutorial bg-neutral-950 w-full ">
      <section className="grid-section grid grid-cols-[repeat(20,_minmax(0,_1fr))] h-screen overflow-y-clip">
        {/* Grid Background */}
        {Array.from(Array(20 * 20), (i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-[10] mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl text-neutral-100 font-black uppercase tracking-tight"
        >
          Hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 0.25 }}
          className="text-white w-1/2 text-xl text-center tracking-wide"
        >
          Join my growing team of create developers
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: "400", damping: 17 }}
          className="text-neutral-100 rounded-full text-3xl bg-indigo-700 px-10 py-3 border border-indigo-900 pointer-events-auto"
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  );
}
