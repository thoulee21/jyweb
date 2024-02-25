import React from "react";
import aboutMiddle from "../../assets/images/about_middle.png";
import aboutBottom from "../../assets/images/about_bottom.jpg";
import { leadDate, middleContent } from "./index.config";
import "./index.scss";

function About(props) {
  return (
    <div className="about-page">
      <div className="about-page-top">
        <div className="word">
          <div className="english">20 YEARS TO HELP YOUR MOVE FORWORD</div>
          <div className="chainese">20年经验祝您公司砥砺前行</div>
        </div>
      </div>
      <div className="about-page-middle">
        <div className="about-page-left">
          <div className="title">君颖投资国际集团</div>
          <div className="content">{middleContent}</div>
        </div>
        <div className="about-page-right">
          <img src={aboutMiddle} alt="" />
        </div>
      </div>
      <div className="lead-figure">
        <div className="lead-title">领导人物</div>
        <div className="content-lead">
          <div className="lead-figure-left"></div>
          <div className="lead-figure-right">
            <ul>
              {leadDate.map((item) => {
                return <li key={item.title}>{item.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="about-page-bottom">
        <img src={aboutBottom} alt="" />
      </div>
    </div>
  );
}

export default About;
