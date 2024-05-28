import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
        initial={{ y: 336 }}
        animate={{ y: 0 }}
        exit={{ y: 500 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        layout
        className="absolute bottom-4 inset-x-0 mx-auto w-[22rem] min-h-10 bg-neutral-50 px-8 pb-6 overflow-hidden rounded-xl"
      >
        <motion.div className="pt-3 text-[13px]" key={content}>
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
