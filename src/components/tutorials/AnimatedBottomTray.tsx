import { ReactNode, useState } from "react";
import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import {
  OptionsMenu,
  PrivateKey,
  RecoveryPhrase,
  RemoveWallet,
} from "./tray-content";

interface TrayProps {
  closeTray: () => void;
}

export const Tray = ({ closeTray }: TrayProps) => {
  const [content, setContent] = useState("options");

  const trayContent: Record<string, ReactNode> = {
    options: <OptionsMenu setContent={setContent} closeTray={closeTray} />,
    privateKey: <PrivateKey setContent={setContent} closeTray={closeTray} />,
    recovery: <RecoveryPhrase setContent={setContent} closeTray={closeTray} />,
    remove: <RemoveWallet setContent={setContent} closeTray={closeTray} />,
  };

  const controls = useDragControls();
  const dragY = useMotionValue(0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overlay absolute inset-0 bg-black/20"
        onClick={closeTray}
      />
      <motion.div
        style={{ borderRadius: 28, y: dragY }}
        initial={{ y: 336 }}
        animate={{ y: 0 }}
        exit={{ y: 500 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="absolute bottom-4 inset-x-0 mx-auto w-[22rem] min-h-10 bg-neutral-50 px-8 pb-6 overflow-hidden"
        layout
        drag="y"
        dragListener={false}
        dragControls={controls}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={{
          top: 0,
          bottom: 0.5,
        }}
        onDragEnd={() => {
          if (dragY.get() >= 100) {
            closeTray();
          }
        }}
      >
        <button className="my-3 mx-auto flex justify-center">
          <motion.div
            layout
            key="drag-bar"
            onPointerDown={(e) => {
              controls.start(e);
            }}
            style={{ borderRadius: 100 }}
            className="h-2 w-14 cursor-grab touch-none bg-gray-200 active:cursor-grabbing"
          />
        </button>
        <motion.div
          className="text-[13px]"
          key={content}
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {trayContent[content]}
        </motion.div>
      </motion.div>
    </>
  );
};

export default function AnimatedBottomTray() {
  const [isTrayOpen, setTrayOpen] = useState(false);
  return (
    <main className="w-full bg-[#f5f4ff] h-screen grid place-items-center text-[13px] text-gray-500">
      <div className="">
        <button
          onClick={() => setTrayOpen(true)}
          className="tray-btn bg-neutral-950 text-neutral-50 p-2 px-3 rounded-md border [border-image:linear-gradient(90deg,transparent,blue)] [border-image-slice:1]"
        >
          Show Tray
        </button>
        <AnimatePresence>
          {isTrayOpen && <Tray closeTray={() => setTrayOpen(false)} />}
        </AnimatePresence>
      </div>
    </main>
  );
}
