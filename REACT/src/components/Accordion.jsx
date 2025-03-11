import React, { useState } from "react";
import "./Accordion.css";

const accordionData = [
  {
    id: 1,
    title: "Accordion 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ea?",
  },
  {
    id: 2,
    title: "Accordion 2",
    content: "Wow more content!?",
  },
  {
    id: 3,
    title: "Accordion 3",
    content: "Wait there's more content!",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div>
      {accordionData.map(({ id, title, content }) => (
        <div key={id}>
          <button className="btn" onClick={() => toggleAccordion(id)}>
            {title}
          </button>
          <div
            className={`accordion-content ${openId === id ? "open" : ""}`}
          >
            <p className="content">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
