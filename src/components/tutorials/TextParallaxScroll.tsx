import { ArrowUpRightIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IMG_PADDING = 12;

const ParallaxContent = ({
  imgURL,
  subHeading,
  heading,
  children,
}: {
  imgURL: string;
  subHeading: string;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className=""
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className=" relative h-[150vh]">
        <StickyImage imgURL={imgURL} />
        <TextOverlay subHeading={subHeading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

const TextOverlay = ({
  subHeading,
  heading,
}: {
  subHeading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]); // y is a valid framer-motion name
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-neutral-300 text-xl md:mb-4 md:text-xl">
        {subHeading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const StickyImage = ({ imgURL }: { imgURL: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]); // transform scroll position values into scale values
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]); // note: use valid css property names as motion variables

  return (
    <motion.div
      ref={targetRef}
      className="image sticky z-0 overflow-hidden rounded-3xl"
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
    >
      <motion.div
        style={{ opacity }}
        className="img-overlay absolute inset-0 bg-neutral-950/90"
      />
    </motion.div>
  );
};

const PageContent = () => {
  return (
    <div className="flex-col flex sm:flex-row gap-2 max-w-[750px] mx-auto p-5 my-12">
      <h1 className="text-xl font-bold sm:w-[70%] text-neutral-400">
        Heading Content Describing Image
      </h1>
      <div className="paragraph tex-[13px]">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          expedita iste delectus, ullam atque nobis? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Autem possimus alias accusamus nobis,
          beatae fugit.
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <button
          className="mt-5 w-full sm:max-w-max justify-center flex p-3 sm:items-center 
        bg-black text-white rounded-md sm:px-3 sm:p-2 gap-1"
        >
          Learn More
          <ArrowUpRightIcon size={15} />
        </button>
      </div>
    </div>
  );
};

export default function TextParallaxScroll() {
  return (
    <main
      className="text-[12px]"
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <ParallaxContent
        imgURL="/parallax/next.js-02.jpg"
        heading={"Next.js 14"}
        subHeading={"The World's most popular react framework"}
      >
        <PageContent />
      </ParallaxContent>

      <ParallaxContent
        imgURL="/parallax/framer-01.jpg"
        heading={"Next.js 14"}
        subHeading={"The World's most popular react framework"}
      >
        <PageContent />
      </ParallaxContent>

      <ParallaxContent
        imgURL="/parallax/framer-02.png"
        heading={"Next.js 14"}
        subHeading={"The World's most popular react framework"}
      >
        <PageContent />
      </ParallaxContent>
    </main>
  );
}
