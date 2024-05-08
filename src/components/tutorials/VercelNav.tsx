import { ArrowDown } from "lucide-react";
import useScrollPosition from "@react-hook/window-scroll";
import { useMemo } from "react";

/*
 *  Custom React Hook, useRange:
 * @returns  (number) returns a single number that falls in a range of two specified limits
 */
const useRange = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  const mappedValue = useMemo(() => {
    const newValue =
      ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

    const largest = Math.max(outMin, outMax);
    const smallest = Math.min(outMin, outMax);

    return Math.min(Math.max(newValue, smallest), largest);
  }, [inMax, inMin, num, outMax, outMin]);

  return mappedValue;
};

const VercelSVG = ({ logoScale }: { logoScale: number }) => {
  return (
    <>
      <div className="bg-neutral-800 p-3 left-0 pb-[21px] fixed top-0 z-[2] ">
        <svg
          width="30px"
          height="27px"
          viewBox="0 0 30 27"
          className="duration-[400ms]"
          style={{ transform: `scale(${logoScale})` }}
        >
          <path
            d="M15 0L30 27L0 27L15 0L15 0Z"
            id="Shape"
            fill="#fff"
            stroke="none"
          />
        </svg>
      </div>
    </>
  );
};

export default function VercelNav() {
  const y = useScrollPosition(60);
  const navX = useRange(y, 0, 50, 0, 42);
  const logoScale = useRange(y, 0, 50, 1, 0.8);

  return (
    <>
      <nav className="text-[12px]">
        <div className="primary-nav flex p-2 px-4 gap-5 py-3">
          <VercelSVG logoScale={logoScale} />
          <div className="profile flex ml-10 gap-2 items-center">
            <div className="rounded-full size-6 bg-gradient-to-tr from-pink-400 to-purple-400"></div>
            <p className="">nard</p>
            <p className="rounded-[15px] text-blue-400 bg-blue-400/20 p-[2px] px-[10px]">
              Pro
            </p>
          </div>
        </div>
      </nav>
      <nav
        style={{ transform: `translateX(${navX}px)` }}
        className=" text-[12px] sticky top-0 secondary-nav  p-3 bg-neutral-800"
      >
        <ol className="flex relative gap-2 items-baseline">
          <li className="nav-label">Product</li>
          <li
            className="border-b border-white cursor-pointer p-2
                hover:border-none hover:bg-neutral-700 hover:rounded-md"
          >
            Deployments
          </li>
          <li className="nav-label">Analytics</li>
        </ol>
      </nav>

      <main className="bg-neutral-900 w-full h-[100vh]">
        <div
          className="translate-x-[-50%] hover:-translate-y-3 cursor-pointer duration-[400ms] fixed bottom-[50px] left-[50%] 
          bg-neutral-500/20 p-2 px-3 rounded-full text-[12px] flex items-center gap-1"
        >
          Scroll down
          <ArrowDown size={20} />
        </div>
      </main>
    </>
  );
}
