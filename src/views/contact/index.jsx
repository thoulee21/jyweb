import React from "react";
import linkRight from "../../assets/images/link-right.jpg";
import "./index.scss";

function Contact(props) {
  return (
    <div className="contact-page">
      <div className="contact-page-top">
        <div className="content">
          <div className="name">J.Y. Investment</div>
          <div className="tell">+86 18800001111</div>
          <div className="mail">11@gmail.com</div>
        </div>
      </div>
      <div className="contact-page-middle">
        <div className="middle-content">
          <div className="middle-content-left">
            <div className="title">免费*快速为您注册公司</div>
            <input placeholder="公司名称" className="comput-name"></input>
            <input placeholder="预留电话" className="tell-number"></input>
            <div className="link-people">快速为您匹配职业经理人</div>
          </div>
          <div className="middle-content-right">
            <img src={linkRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
