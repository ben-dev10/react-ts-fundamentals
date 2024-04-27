import GridEffect from "./tutorials/GridEffect";

export default function Tutorial({ tutorialID }: { tutorialID: string }) {
  // map of all available components
  const components: { [key: string]: React.FC } = {
    grideffect: GridEffect,
  };

  const ComponentToRender = components[tutorialID.toLocaleLowerCase()];

  if (!ComponentToRender) {
    return <div> Component not found</div>;
  }
  return (
    <div className="tutorial">
      <ComponentToRender />
    </div>
  );
}
