import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Main.css";
import Car from "../assets/automobile.svg";
import Book from "../assets/book.svg";
import Br from "../assets/brasil.svg";
import Scroll from "../assets/scroll.svg";
import Eua from "../assets/united-states-of-america.svg";
import History from "./history/History";
export default function Main() {
  return (
    <div className="main">
      <Paper className="paper">
        <div className="titleMain">
          <img src={Car} alt="car" className="svg" />
          <img src={Book} alt="car" className="svg" />
          <img src={Scroll} alt="car" className="svg" />
          <h1> Help Me Brain</h1>
          <img src={Br} alt="car" className="svg" />
          <img src={Eua} alt="car" className="svg" />
        </div>
        <div className="historyMain">
          <History />
        </div>
      </Paper>
    </div>
  );
}
