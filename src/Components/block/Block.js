import React from "react";
import "./Block.css";
export default function Block(props) {
  const data = props.data.text
    ? props.data
    : {
        text: "Bem Vindos ao Help Me Brain",
        description:
          "São várias historias incriveis para melhorar seu aprendizado em inglês, repita em voz alta todas as palavras e interaja com a situação da historia, que eu realmente acredito que logo logo estará super fluente no inglês.",
      };
  return (
    <div className="block">
      <div className="blockImage">
        {data.image ? (
          <img src={data.image} alt={data.alt} className="imageCard" />
        ) : (
          ""
        )}
      </div>
      <div className="blockText">
        <h1>{data.text}</h1>
        <h3>{data.trad ? <strong>Tradução: {data.trad}</strong> : ""}</h3>
        <h3> {data.description ? data.description : ""} </h3>
      </div>
    </div>
  );
}
