import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const AppIcon = ({ mouseX }: { mouseX: MotionValue }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-200, 0, 200], [40, 90, 40]);
  const width = useSpring(widthSync, {
    damping: 15,
    mass: 0.1,
    stiffness: 200,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-500"
    />
  );
};

export default function MacOSDock() {
  const mouseX = useMotionValue(Infinity);
  return (
    <main className="w-full h-screen bg-[#fafafa]">
      <div
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
        }}
        className="dock absolute bottom-[70px] left-[50%] -translate-x-[50%] flex h-16 items-end gap-4 rounded-2xl p-4 pb-3 bg-slate-900"
      >
        {[...Array(6).keys()].map((i) => (
          <AppIcon key={i} mouseX={mouseX} />
        ))}
      </div>
    </main>
  );
}
