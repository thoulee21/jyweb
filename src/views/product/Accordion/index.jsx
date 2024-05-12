import { useState } from "react";
import { accordionData } from "./index.config";
import "./index.scss";
function Accordion(props) {
  const [active, setActive] = useState();
  return (
    <div
      className="sfq"
      onMouseLeave={() => {
        setActive("");
      }}
    >
      {accordionData.map((item) => {
        return (
          <div
            key={item.title}
            className={`sfq-item ${active === item.title ? "active" : ""} ${
              item.icon
            }`}
            onMouseEnter={() => setActive(item.title)}
          >
            <div className="sfq-title">{item.title}</div>
            <div className="sfq-synopsis">{item.synopsis}</div>
            <div className="sfq-content">
              <ul>
                {item.content.split("/").map((val) => {
                  return <li key={val}>{val}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
