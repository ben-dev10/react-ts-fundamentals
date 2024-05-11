import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import {
  ArrowUpCircleIcon,
  BarChart,
  BookCheckIcon,
  ChevronRight,
  Pencil,
  SquareStackIcon,
  UserCircle2,
  UserCircleIcon,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  name: string;
}
interface Props2 {
  children: React.ReactNode;
  name: string;
  setSelectedProject: (val: string | null) => void;
}

interface Props3 {
  selectedProject: string;
  isOpen: boolean;
  setSelectedProject: (project: string | null) => void;
}

const containerVariants = {
  close: {
    width: "4.5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const variants = {
  close: { x: -100, opacity: 0 },
  open: { x: 0, opacity: 100 },
};

const NavigationLink = ({ children, name }: Props) => {
  return (
    <a
      href="#"
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit font-[Poppins] overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </a>
  );
};

const ProjectLink = ({ children, name, setSelectedProject }: Props2) => {
  const handleClick = () => {
    setSelectedProject(name);
  };
  return (
    <a
      onClick={handleClick}
      href="#"
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <ChevronRight size={20} />
      </div>
    </a>
  );
};
const ProjectNavigation = ({
  selectedProject,
  isOpen,
  setSelectedProject,
}: Props3) => {
  return (
    <motion.nav
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`h-full flex flex-col gap-8 w-64 absolute bg-neutral-900 ml-0 ${isOpen ? "left-64" : "left-20"} border-r border-neutral-800 p-5`}
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <h1 className="tracking-wide text-neutral-100 text-lg">
          {selectedProject}
        </h1>
        <button className="" onClick={() => setSelectedProject(null)}>
          <X size={18} />
        </button>
      </div>
      <input
        placeholder="Search"
        type="text"
        className="px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100"
      />
      <div className="flex flex-col gap-3">
        <NavigationLink name="Progress">
          <ArrowUpCircleIcon />
        </NavigationLink>
        <NavigationLink name="Team Members">
          <Users />
        </NavigationLink>
        <NavigationLink name="In review">
          <Pencil size={20} />
        </NavigationLink>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="tracking-wide text-neutral-300">Team members</h1>
        <a href="#" className="flex flex-row gap-3 place-items-center">
          <UserCircleIcon />
        </a>
      </div>
    </motion.nav>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const containerControls = useAnimationControls(); // used to trigger animations to commence
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [containerControls, isOpen, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen); // toggle navigation opened or closed
    setSelectedProject(null);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-neutral-900 flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="w-10  h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <motion.g
                variants={svgVariants}
                animate={svgControls}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.g>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <NavigationLink name="Dashboard">
            <BarChart size={24} className="shrink-0" />
          </NavigationLink>
          <NavigationLink name="Projects">
            <SquareStackIcon size={24} className="shrink-0" />
          </NavigationLink>
          <NavigationLink name="Tasks">
            <BookCheckIcon size={24} className="shrink-0" />
          </NavigationLink>
          <NavigationLink name="Users">
            <UserCircle2 size={24} className="shrink-0" />
          </NavigationLink>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <ProjectLink
            name="Virtual Reality"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700"></div>
          </ProjectLink>
          <ProjectLink
            name="Apple Vision Pro"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700"></div>
          </ProjectLink>
          <ProjectLink name="Porsche" setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700"></div>
          </ProjectLink>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            isOpen={isOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default function SideNavigation() {
  return (
    <main className="font-[Poppins] text-[12px] w-full h-screen flex flex-row relative  ">
      <Navigation />
      <section className="flex flex-col p-10 ml-20 w-full gap-5">
        <h1 className="text-4xl text-neutral-200">Dashboard</h1>
        <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded" />
        <div className="flex flex-row gap-5 w-full">
          <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border" />
          <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border" />
        </div>
      </section>
    </main>
  );
}
