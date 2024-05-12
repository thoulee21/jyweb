import React, {useEffect, useRef} from "react";
import {services} from "../../constant";
import "./index.scss";

function Home() {
  const pageRef = useRef();
  const formRef = useRef();
  
  useEffect(() => {
      const onScroll = () => {
        const parallax = pageRef.current;
        const scrollPosition = window.scrollY;
        parallax.style.backgroundPositionY = scrollPosition * 0.7 + "px";
        
        // 注册表单: 从下到上
        const formEl = formRef.current;
        const clientRect = formEl.getBoundingClientRect();
        
        // 添加类名
        if (clientRect.top < document.documentElement.clientHeight - 50) {
          formEl.style.transform = "translateY(0)";
        } else {
          formEl.style.transform = "translateY(30%)";
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
    , []);
  
  return (
    <div ref={pageRef} className="home-page">
      <section className="section">
        <div className="text text-en">J.Y. Investment</div>
        <div className="text text-cn">我们致力于提供全方位商务服务</div>
      </section>
      <section className="section">
        <div className="item">
          <span className="text">立足于上海展望于世界</span>
        </div>
        <div className="item">
          <span className="text">超20000个案例</span>
        </div>
        <div className="item">
          <span className="text">超过20年金融领域从业者</span>
        </div>
      </section>
      <section className="section">
        <div className="tag">
          <span className="text">我们的业务</span>
        </div>
        <div className="cell">
          {
            services.map((item) => (
              <div className="cell-item" key={item.titleEn}>
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="sub-title">{item.titleEn}</div>
                  <div className="list">
                    {item.list.map((text, index) => (
                      <div className="item" key={index}>{text}</div>
                    ))}
                  </div>
                </div>
                <div className="illustration">
                  <img src={item.illustration} alt="illustration" />
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section className="section">
        <div className="form" ref={formRef}>
          <div className="left">
            <div className="form-title">
              免费*为您注册公司<p>Start a business FREE*</p>
            </div>
            <input className="form-input" type="text" placeholder="公司名称"/>
            <button className="form-submit">快速为您匹配职业经理人</button>
          </div>
          <div className="right"></div>
        </div>
        <div className="illustration"></div>
      </section>
    </div>
  );
}

export default React.memo(Home);
