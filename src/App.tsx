import ConceptSelector from "./components/concepts/ConceptSelector";
import TutorialSelector from "./components/tutorials/TutorialSelector";

function App() {
  return (
    <div className="app">
      <div className="tutorials-wrapper border-dashed mb-2 border-[2px] p-5 border-gray-500">
        {/* specify here type of tutorial as a property value */}
        <TutorialSelector tutorialID="GridEffect2" />
      </div>
      <div className="concepts-wrapper border-dashed border-[2px] p-5 border-yellow-700">
        {/* presence of any property determines what to display */}
        <ConceptSelector concept1  />
      </div>
    </div>
  );
}

export default App;
