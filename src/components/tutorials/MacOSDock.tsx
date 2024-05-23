import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { AlertOctagon } from "lucide-react";
import { useRef } from "react";

const imgUrls = [
  "/public/app-icons/blender.png",
  "/public/app-icons/craft.png",
  "/public/app-icons/framer.png",
  "/public/app-icons/word.png",
  "/public/app-icons/obsidian.png",
];

const AppIcon = ({ mouseX, url }: { mouseX: MotionValue; url: string }) => {
  const ref = useRef<HTMLImageElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    damping: 15,
    mass: 0.1,
    stiffness: 200,
  });

  return (
    <motion.img
      ref={ref}
      style={{ width }}
      src={url}
      className="aspect-square w-10 rounded-full"
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
        className="dock shrink-0 absolute bottom-[70px] left-[50%] -translate-x-[50%] flex h-16 items-end gap-4 rounded-2xl p-4 pb-3 bg-slate-900/50 backdrop-blur-md"
      >
        {imgUrls.map((url, i) => (
          <AppIcon key={i} mouseX={mouseX} url={url} />
        ))}
      </div>
      <div className="alert text-rose-500 text-[12px]  md:opacity-0 transition-opacity duration-600 absolute bottom-[40px] left-[50%] -translate-x-[50%] whitespace-pre ">
        <div className="flex items-center gap-1">
          <AlertOctagon size={16} />
          Dock design may break at smaller screens
        </div>
      </div>
    </main>
  );
}
