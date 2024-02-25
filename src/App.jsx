import {NavLink, useRoutes} from "react-router-dom";
import routes from "./router";
import "./App.scss";
import React, {useEffect, useState} from "react";
import classNames from "classnames";

function App() {
  const menus = [
    {path: "/", name: "首页"},
    {path: "/about", name: "关于我们"},
    {path: "/product", name: "产品/服务"},
    {path: "/news", name: "新闻资讯"},
    {path: "/contact", name: "联系我们"}
  ];
  const [scrolling, setScrolling] = useState(false);
  const activeClassNameFn = ({isActive}) => isActive ? "nav-item active" : "nav-item";
  
  useEffect(() => {
    const onScroll = () => setScrolling(document.documentElement.scrollTop > 0);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  return (
    <div className="layout">
      <div className={classNames("layout-header", {scrolling})}>
        <div className="logo">
          <img src="http://localhost:3000/logo192.png" alt="logo"/>
          <span className="text">君颖投资</span>
        </div>
        <nav className="nav">
          {menus.map((item) => {
            return (
              <NavLink
                to={item.path}
                key={item.path}
                className={activeClassNameFn}>
                {item.name}
              </NavLink>
            );
            
          })}
        </nav>
      </div>
      <div className="layout-body">
        {useRoutes(routes)}
      </div>
      <div className="layout-footer">
        <nav className="nav">
          {
            menus.map((item) => (
              <NavLink to={item.path} key={item.path}>{item.name}</NavLink>
            ))
          }
        </nav>
        <div className="extra">
          <NavLink to="/follow">关注我们</NavLink>
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);
