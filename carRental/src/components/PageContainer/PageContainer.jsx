import React from "react";
import "./pageContainer.css";
const PageContainer = ({children}) => {
  return <div className="pageWrapper">{children}</div>;
};

export default PageContainer;
