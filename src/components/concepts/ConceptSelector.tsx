import Concept1 from "./Concept1";
import Concept2 from "./Concept2";

export default function ConceptSelector({
  concept1,
  concept2,
}: {
  concept1?: boolean;
  concept2?: boolean;
}) {
  const c1Component: React.ReactElement | null = concept1 ? <Concept1 /> : null;
  const c2Component: React.ReactElement | null = concept2 ? <Concept2 /> : null;

  return (
    <div>
      {/* <div className={`${""}`}>
      </div> */}
      <div id="concepts" className="p-1">
        {c1Component}
        {c2Component}
      </div>
    </div>
  );
}
