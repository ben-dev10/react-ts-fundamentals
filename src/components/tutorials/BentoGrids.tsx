import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import vlogo from "../../assets/v-logo@2x.png";
import {
  ArrowRight,
  Calendar,
  Facebook,
  Github,
  Instagram,
  LucideToggleRight,
  MapPinIcon,
  Youtube,
} from "lucide-react";

type Props = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img src={vlogo} alt="v logo" className="size-14 " />
      <h1 className="mb-12 text-3xl font-medium leading-tight">
        Hello, I'm Tom,{" "}
        <span className="text-zinc-400">
          I build cool websites like this one
        </span>{" "}
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-200 hover:underline"
      >
        Contact me <ArrowRight size={16} className="" />
      </a>
    </Block>
  );
};

const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-red-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <Youtube size={60} />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-zinc-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <Github size={60} />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <Facebook size={60} />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-pink-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <Instagram size={60} />
        </a>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-md leading-snug">
      <a href="" className="">
        My interest is in creating{" "}
        <span className="text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit
          unde tenetur numquam expedita. Eveniet hic molestiae quod doloribus
          blanditiis et? Laborum perferendis soluta quae veniam modi tempora
          magnam autem?
        </span>
      </a>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-3 gap-3 grid place-items-center">
      <MapPinIcon />
      Ghana
    </Block>
  );
};

const SignUpBlock = () => {
  return (
    <Block className="col-span-9">
      Join my mailing list
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent outline-none p-2 w-full border border-zinc-500 rounded-md"
        />
        <button className="bg-white flex gap-1 items-center shrink-0 text-black px-3 py-2 rounded-md">
          <Calendar size={19} />
          Join list
        </button>
      </div>
    </Block>
  );
};

export default function BentoGrids() {
  return (
    <main className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="logo grid place-items-center my-3 mb-6">
        <LucideToggleRight size={50} className="text-zinc-300" />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05, // stagger effect
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className="bento-grid  mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <SignUpBlock />
      </motion.div>
      <div className="text-center text-red-300 mt-8 hover:underline">
        <a href="">Made with ♥</a>
      </div>
    </main>
  );
}
