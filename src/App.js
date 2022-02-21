import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    console.log(i);
  };

  const data = [
    {
      que: "Do I have to allow the use of cookes?",
      ans: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      que: "How do I change my password?",
      ans: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      que: "What is BankID and what is use of it?",
      ans: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <div className="container">
      {data.map((item, i) => {
        return (
          <div className="accordionItem">
            <div className="accordionItemQue">
              <span>{item.que}</span>
              <span className="accordionItemIcon" onClick={() => toggle(i)}>
                {selected === i ? "-" : "+"}
              </span>
            </div>
            <div
              className={
                selected === i ? "accordionItemAns show" : "accordionItemAns"
              }
            >
              {item.ans}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
