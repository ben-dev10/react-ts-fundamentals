import GridEffect from "./GridEffect";
import AnimatedTextInput from "./AnimatedTextInput";
import SVGHoverEffect from "./SVGHoverEffect";
import AnimatedHeroText from "./AnimatedHeroText";
import TWCSSPlugins from "./TWCSSPlugins";

export default function TutorialSelector({
  tutorialID,
}: {
  tutorialID:
    | "grideffect"
    | "animatedtextinput"
    | "svghovereffect"
    | "animatedherotext"
    | "twcssplugins";
}) {
  const components: { [key: string]: React.FC } = {
    grideffect: GridEffect,
    animatedtextinput: AnimatedTextInput,
    svghovereffect: SVGHoverEffect,
    animatedherotext: AnimatedHeroText,
    twcssplugins: TWCSSPlugins,
  };

  const ComponentToRender = components[tutorialID.toLocaleLowerCase()];

  if (!ComponentToRender) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <p className="text-center"> No tutorial Component found</p>
          <small className="text-neutral-500 inline-block max-w-[250px] text-center">
            Select one by selecting a property in the TutorialSelector component
          </small>
        </div>
      </div>
    );
  }
  return (
    <div className="tutorial">
      <ComponentToRender />
    </div>
  );
}
