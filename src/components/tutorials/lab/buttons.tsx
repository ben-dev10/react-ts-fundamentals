import { ArrowUpRight } from "lucide-react";

const PayloadButton = () => {
  return (
    <a href="#" className="text-[13px] h-[50px] group overflow-hidden">
      <div className="top flex items-center bg-black h-[100%] px-10 group-hover:translate-y-[-50px] duration-[400ms]">
        <p className="transform-origin-left-bottom group-hover:rotate-[-10deg] duration-[600ms]">
          Explore case studies
        </p>
        <ArrowUpRight className="ml-3" size={15} />
      </div>
      <div className="top flex items-center bg-white text-black p-4 px-10 group-hover:translate-y-[-50px] duration-[400ms]">
        <p className="transform-origin-left-bottom rotate-[10deg] duration-[600ms] group-hover:rotate-0">
          Explore case studies
        </p>
        <ArrowUpRight className="ml-3" size={15} />
      </div>
    </a>
  );
};

export default function Buttons() {
  return (
    <main className="grid min-h-screen place-content-center">
      <PayloadButton />
    </main>
  );
}
