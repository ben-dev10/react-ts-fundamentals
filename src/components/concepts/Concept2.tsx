export default function Concept1() {
  /**
   * Default Values with Typescript:
   * Hold "Ctrl+Space" for autocompletion with allowed values
   */
  let names: "John" | "Alice";
  // eslint-disable-next-line prefer-const
  names = "John";
  return <div className="text-yellow-500">{names}</div>;
}
