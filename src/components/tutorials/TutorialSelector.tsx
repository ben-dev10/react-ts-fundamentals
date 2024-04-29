import GridEffect from "./GridEffect";
import AnimatedTextInput from "./AnimatedTextInput";

export default function TutorialSelector({
  tutorialID,
}: {
  tutorialID: string;
}) {
  const components: { [key: string]: React.FC } = {
    grideffect: GridEffect,
    animatedtextinput: AnimatedTextInput,
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
