import Concept1 from "./Concept1";
import Concept2 from "./Concept2";

const _404 = () => {
  return <p className="hidden [visibility:hidden]">Not found</p>;
};

export default function ConceptSelector({
  concept1,
  concept2,
}: {
  concept1?: boolean;
  concept2?: boolean;
}) {
  // concepts are stored with props of this component (<ConceptSelector />)
  const c1Component: React.ReactElement = concept1 ? <Concept1 /> : <_404 />;
  const c2Component: React.ReactElement = concept2 ? <Concept2 /> : <_404 />;

  return (
    <div id="tutorials">
      {c1Component}
      {c2Component}
    </div>
  );
}
