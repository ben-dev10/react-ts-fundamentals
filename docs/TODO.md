# TODO

- [ ] consider "routes" or different pages for tutorial & concepts
- [ ] setting empty state for `<ConceptSelector />`

```tsx
const [isEmpty, setEmptyInfo] = useState<boolean | React.ReactElement>(false);
const c1Component: React.ReactElement | null = concept1 ? <Concept1 /> : null;
const c2Component: React.ReactElement | null = concept2 ? <Concept2 /> : null;

useEffect(() => {
  const tutorialWrapper = document.querySelector(".tutorials");

  if (!tutorialWrapper?.firstElementChild) {
    setEmptyInfo(false);
  } else {
    setEmptyInfo(true);
  }
}, []);

return (
  <div>
    <div className={`${""}`}>
      {isEmpty && <p>Nothing</p>}
      {/* {!tutorialWrapper?.parentElement?.firstElementChild && emptyInfo} */}
      {/* {tutorialWrapper?.childElementCount == 0 ? <p>No element found</p> : ""} */}
    </div>
    <div id="tutorials" className="border border-green-400 p-4 my-2">
      {c1Component}
      {c2Component}
    </div>
  </div>
);
```
