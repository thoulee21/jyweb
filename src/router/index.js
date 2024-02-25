import React from "react";
import Home from "../views/home";
import News from "../views/news";
import About from "../views/about";
import Follow from "../views/follow";
import Contact from "../views/contact";
import Product from "../views/product";

// const News = React.lazy(() => import("../views/news"));
// const About = React.lazy(() => import("../views/about"));
// const Follow = React.lazy(() => import("../views/follow"));
// const Contact = React.lazy(() => import("../views/contact"));
// const Product = React.lazy(() => import("../views/product"));

const routes = [
  {path: "/", element: <Home/>},
  {path: "/news", element: <News/>},
  {path: "/about", element: <About/>},
  {path: "/follow", element: <Follow/>},
  {path: "/contact", element: <Contact/>},
  {path: "/product", element: <Product/>}
];

export default routes;
