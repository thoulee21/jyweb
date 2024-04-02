import React from "react";
import people from "../../assets/images/people.png";
import Accordion from "./Accordion/index";
import { tableLIst } from "./Accordion/index.config";
import "./index.scss";
function Product(props) {
  return (
    <div className="product-page">
      <div className="parduct-page-top">
        <div className="top-left">
          <div className="product">优质产品</div>
          <div className="service">服务至上</div>
        </div>
        <div className="top-right">
          <img src={people} alt="" />
        </div>
      </div>
      <div className="parduct-page-middle">
        <div className="middle-title">我们的产品</div>
        <Accordion></Accordion>
        <div className="middle-list">
          {tableLIst.map((item) => {
            return (
              <div className="list-item" key={item.title}>
                <div className="list-title">{item.title}</div>
                <div className="list-content">{item.content}</div>
              </div>
            );
          })}
        </div>
        <div className="parduct-page-middle-buttom">
          <a href="#">点击咨询</a>
        </div>
      </div>
      <div className="parduct-page-bottom">
        <div className="parduct-page-bottom-title">新闻资讯/政府资料</div>
        <div className="parduct-page-bottom-contet">
          <div className="empty"></div>
          <div className={`empty one`}></div>
          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
