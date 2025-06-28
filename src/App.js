import "./styles.css";
import Accordian from "./Accordian";
import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to changing data.",
  },
  {
    id: 2,
    title: "What is a Component?",
    content:
      "A component is a reusable, independent piece of UI in a React application. It can be a class-based or functional component.",
  },
  {
    id: 3,
    title: "What is State in React?",
    content:
      "State is an object that holds information that may change over the lifetime of the component. When state changes, the component re-renders.",
  },
  {
    id: 4,
    title: "What are Props?",
    content:
      "Props are inputs to components. They are passed down from parent to child components and help make components dynamic and reusable.",
  },
  {
    id: 5,
    title: "What is your Name?",
    content: "My name is sanjay singh mehara",
  },
];

export default function App() {
  const [openAccordianId, setOpenAccordianId] = useState("");

  function handleToggle(id) {
    setOpenAccordianId((previd) => (previd == id ? null : id));
  }

  return (
    <div className="accordion">
      {accordionData.map((item, i) => (
        <Accordian
          key={item.id}
          num={i}
          title={item.title}
          content={item.content}
          onOpen={openAccordianId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
