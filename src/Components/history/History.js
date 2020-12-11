import React from "react";
import AsideLeft from './AsideLeft'
import AsideRight from './AsideRight'
import Content from './Content'
import "./History.css";
export default function History() {
  return (
    <div className="history">
      <AsideLeft/>
      <Content/>
      <AsideRight/>      
    </div>
  );
}
