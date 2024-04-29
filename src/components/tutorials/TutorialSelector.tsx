import GridEffect from "./GridEffect";
import AnimatedTextInput from "./AnimatedTextInput";
import SVGHoverEffect from "./SVGHoverEffect";

export default function TutorialSelector({
  tutorialID,
}: {
  tutorialID: "grideffect" | "animatedtextinput" | "svghovereffect";
}) {
  const components: { [key: string]: React.FC } = {
    grideffect: GridEffect,
    animatedtextinput: AnimatedTextInput,
    svghovereffect: SVGHoverEffect,
  };

  const ComponentToRender = components[tutorialID.toLocaleLowerCase()];

  if (!ComponentToRender) {
    return <div> No tutorial Component found</div>;
  }
  return (
    <div className="tutorial">
      <ComponentToRender />
    </div>
  );
}
