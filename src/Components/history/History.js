import { render } from "@testing-library/react";
import React from "react";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import Content from "./Content";
import "./History.css";
export default class History extends React.Component {
  state = {
    history:[
      {
        title:'Learning To Drive'
      }
    ]
  };
  constructor(props) {
    super(props);
    this.SearchHistory=this.SearchHistory.bind(this)
  }
  SearchHistory(){
    this.setState({
      history:[{title:'alex'}]
    })
  }
  render() {
    return (
      <div className="history">
        <AsideLeft search={this.SearchHistory}/>
        <Content data={this.state.history} />
        <AsideRight />
       
      </div>
    );
  }
}
