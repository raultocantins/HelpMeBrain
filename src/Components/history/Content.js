import React, { useState } from "react";
import "./Content.css";
export default function Content(props) {
  function SearchHistory() {
    alert();
  }

  console.log(props.data);
  return (
    <div className="content">
      {props.data.map((e) => {
        return <h1>{e.title}</h1>;
      })}
    </div>
  );
}
