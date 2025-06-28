import { useState } from "react";
import "./styles.css";
export default function Accordian({ num, title, content, onOpen, onToggle }) {
  //   const [isOpen, setisOpen] = useState(false);

  //   function handleisOpen() {
  //     setisOpen((isOpen) => !isOpen);
  //   }

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <p>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="accordion-title">{title}</p>
        <p className="accordion-symbol" onClick={onToggle}>
          {onOpen ? "-" : "+"}
        </p>
      </div>

      {onOpen && (
        <div className={`accordion-content ${onOpen ? "show" : ""}`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
