import React from "react";
// import React, { useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

import PageRouter from "utils/PageRouter";
// import LayoutDefault from "layouts/LayoutDefault";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);
// const trackPage = (page) => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

export default function App() {
  // let location = useLocation();

  // useEffect(() => {
  //   const page = location.pathname;
  //   document.body.classList.add("is-loaded");
  //   // trackPage(page);
  // }, [location]);

  return (
    <div className="App">
      <header className="App-header">
        <PageRouter />
      </header>
    </div>
  );
}
