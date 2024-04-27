import ConceptSelector from "./components/concepts/ConceptSelector";
import Tutorial from "./components/tutorials/Tutorial";

function App() {
  return (
    <>
      <div className="tutorials-wrapper border-[2px] p-5 border-red-500">
        {/* specify here type of tutorial as a property value */}
        <Tutorial tutorialID="GridEffect2" />
      </div>
      <div className="concepts-wrapper border-[2px] p-5 border-yellow-500">
        {/* presence of any property determines what to display */}
        <ConceptSelector concept1 />
      </div>
    </>
  );
}

export default App;
