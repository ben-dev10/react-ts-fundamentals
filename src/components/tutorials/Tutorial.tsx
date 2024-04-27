import GridEffect from "./GridEffect";

export default function Tutorial({ tutorialID }: { tutorialID: string }) {
  const components: { [key: string]: React.FC } = {
    grideffect: GridEffect,
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
