import ConceptSelector from "./components/concepts/ConceptSelector";
import TutorialSelector from "./components/tutorials/_TutorialSelector";

function App() {
  return (
    <div className="app">
      <div className="hidden concepts-wrapper border-dashed border-[2px] p-5 border-gray-500">
        <ConceptSelector concept2 />
      </div>
      <div className="tutorials-wrapper">
        <TutorialSelector tutorialID="textparallaxscroll" />
      </div>
    </div>
  );
}

export default App;
