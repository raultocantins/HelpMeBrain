import React from "react";
import Axios from 'axios'
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import Content from "./Content";
import "./History.css";
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
    Axios.post('https://hmbbackend.herokuapp.com/history',{id:id})
    .then(res=>{      
      this.setState({
        history:res.data.data
      })
    })
    .catch(err=>{
      console.log(err)
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
