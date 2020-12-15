import React from "react";
import "./Content.css";
import Block from '../block/Block'
export default function Content(props) {

  
  return (
    <div className="content">
      {props.data.map((e) => {
        return  <Block data={e}/>
      })}
    </div>
  );
}
