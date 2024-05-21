import GridEffect from "./GridEffect";
import AnimatedTextInput from "./AnimatedTextInput";
import SVGHoverEffect from "./SVGHoverEffect";
import AnimatedHeroText from "./AnimatedHeroText";
import TWCSSPlugins from "./TWCSSPlugins";
import BentoGrids from "./BentoGrids";
import DrizzleDB from "./DrizzleDB";
import HeaderSlider from "./HeaderSlider";
import VercelNav from "./VercelNav";
import TextParallaxScroll from "./TextParallaxScroll";
import WebStorage from "./WebStorage";
import SideNavigation from "./SideNavigation";
import TwitchCard from "./TwitchCard";
import Buttons from "./lab/buttons";
import MacOSDock from "./MacOSDock";

export default function TutorialSelector({
  tutorialID,
}: {
  tutorialID:
    | "grideffect"
    | "animatedtextinput"
    | "svghovereffect"
    | "animatedherotext"
    | "twcssplugins"
    | "bentogrids"
    | "drizzledb"
    | "headerslider"
    | "vercelnav"
    | "textparallaxscroll"
    | "webstorage"
    | "sidenavigation"
    | "twitchcard"
    | "lab:buttons"
    | "macosdock";
}) {
  const components: { [key: string]: React.FC } = {
    grideffect: GridEffect,
    animatedtextinput: AnimatedTextInput,
    svghovereffect: SVGHoverEffect,
    animatedherotext: AnimatedHeroText,
    twcssplugins: TWCSSPlugins,
    bentogrids: BentoGrids,
    drizzledb: DrizzleDB,
    headerslider: HeaderSlider,
    vercelnav: VercelNav,
    textparallaxscroll: TextParallaxScroll,
    webstorage: WebStorage,
    sidenavigation: SideNavigation,
    twitchcard: TwitchCard,
    "lab:buttons": Buttons,
    macosdock: MacOSDock,
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
