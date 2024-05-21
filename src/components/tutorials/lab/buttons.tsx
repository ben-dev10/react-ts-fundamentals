import { ArrowUpRight } from "lucide-react";

const PayloadButton = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="text-[13px] h-[50px] max-w-[234px]  group overflow-hidden"
    >
      <div className="payloadBtn bg-black h-[100%]">
        <p className="transform-origin-left-bottom group-hover:rotate-[-10deg] duration-[600ms]">
          {text}
        </p>
        <ArrowUpRight className="ml-3" size={15} />
      </div>
      <div className="payloadBtn bg-white text-black p-4">
        <p className="transform-origin-left-bottom rotate-[10deg] duration-[600ms] group-hover:rotate-0">
          {text}
        </p>
        <ArrowUpRight className="ml-3" size={15} />
      </div>
    </a>
  );
};

const PayloadFeature = () => {
  return (
    <a href="#" className="text-[12px] group">
      <div
        style={{
          backgroundImage: "url(/src/assets/bg-blur.png)",
          backgroundSize: "1300px 250px",
        }}
        className="flex flex-col gap-10 px-8 p-5 pb-6 bg-black text-white/60 duration-500 group-hover:text-gray-300  border border-neutral-700"
      >
        <div className="flex items-center">
          <small className="font-[Ubuntu_Mono] mr-auto">01</small>
          <ArrowUpRight
            size={16}
            className="opacity-0 duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>
        <div className="group-hover:-translate-y-[6px] duration-300">
          <h4 className="text-[15px] font-semibold">For Agencies</h4>
          <p>
            Payload was created specifically because software consultancies
            needed a better solution
          </p>
        </div>
      </div>

      <div className="line bg-white h-[2px] w-0 group-hover:w-full duration-500 "></div>
    </a>
  );
};

export default function Buttons() {
  return (
    <main className="grid gap-8 min-h-screen place-content-center">
      <PayloadFeature />
      <PayloadButton text="Explore case studies" />
    </main>
  );
}
