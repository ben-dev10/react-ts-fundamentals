import { useRef } from "react";
import Container from "../ui/container";
// import { BorderBeam } from "../ui/borderBeam";

const Dialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className="dialog">
      <button
        onClick={handleClick}
        className="text-[12px] bg-blue-500 text-white p-2 px-4 rounded-md"
      >
        Show dialog
      </button>
      <dialog
        ref={dialogRef}
        className="html-dialog p-4 min-w-[250px] rounded-lg bg-white text-black shadow-lg text-[12px]"
      >
        <h1 className="mb-3">Popup Content</h1>
        <form method="dialog" action="">
          <button className="dialog-close bg-rose-500 text-white p-2 px-4 rounded-md">
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export const ColorPicker = () => {
  const colorRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    colorRef.current?.showPicker();
  };

  //   TODO: add a feature where the color selected becomes button's background
  return (
    <div>
      <p className="w-[250px] mb-2">
        Pick a color by clicking the green button or the color picker beside it.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleClick}
          className="bg-green-500 text-white p-2 px-4 rounded-md"
        >
          Pick color
        </button>
        <input ref={colorRef} type="color" className="" />
      </div>
    </div>
  );
};

export default function HTML() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] text-gray-500  text-[12px]">
      <Container size="4xl">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
          <Dialog />
          <ColorPicker />
          {/* <BorderBeam /> */}
        </div>
      </Container>
    </div>
  );
}
