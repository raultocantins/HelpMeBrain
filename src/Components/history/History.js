import React from "react";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import Content from "./Content";
import "./History.css";
import data from '../../data'
export default class History extends React.Component {
  state = {
    history:[
      {
        
      }
    ]
  };
  constructor(props) {
    super(props);
    this.SearchHistory=this.SearchHistory.bind(this)
  }
  SearchHistory(id){
    
    this.setState({
      history:data
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
