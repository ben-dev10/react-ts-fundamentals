import { useEffect, useRef } from "react";

export default function HeaderSlider() {
  //  const left = document.getElementById("left-side");
  const leftRef = useRef<HTMLElement | null>(null);

  /* making sure "left" (commented one) is initialized properly and avoid the possibility of it being "null".,
   * and the reason for useRef is to avoid querying the DOM directly
   */
  useEffect(() => {
    leftRef.current = document.getElementById("left-side");
  }, []);

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    // const width = e.clientX / window.innerWidth * 100;
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    const width = (clientX / window.innerWidth) * 100; // e.client is defined in the variable above
    // left.style.width = `${width}%`;
    if (leftRef.current) {
      leftRef.current.style.width = `${width}%`;
    }
  };

  //   document.onmousemove = (e) => handleOnMove(e); // for PC
  //   document.ontouchmove = (e: TouchEvent) => handleOnMove(e.touches[0]); // for mobile

  useEffect(() => {
    document.onmousemove = (e) => handleOnMove(e); // for PC
    document.ontouchmove = (e: TouchEvent) => handleOnMove(e); // for mobile
    return () => {
      document.onmousemove = null;
      document.ontouchmove = null;
    };
  }, []);

  return (
    <div>
      <div id="left-side" className="side bg-purple-500 z-[2]">
        <h1 className="title">
          Today is going to be{" "}
          <span className="font-[garamond] font-[800] text-yellow-300">
            awesome
          </span>
        </h1>
      </div>
      <div id="right-side" className="side bg-yellow-500 ">
        <h1 className="title ">
          Today is going to be{" "}
          <span className="font-[garamond] font-[800] text-pink-500">
            wonderful
          </span>
        </h1>
      </div>
    </div>
  );
}
