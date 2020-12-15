import React, { useEffect, useState } from "react";
import Axios from 'axios'
import "./AsideLeft.css";
import Paper from "@material-ui/core/Paper";
export default function AsideLeft(props) {
  const [historys, sethistory] = useState([]);  
useEffect(()=>{
  Axios.get('https://hmbbackend.herokuapp.com/historys')
  .then(res=>{
sethistory(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])
function SearcHistory(id){
props.search(id)
}

  return (
    <div className="asideLeft">
      {historys.map((e) => {
        return (

          <Paper elevation={2} className="btnHistory" onClick={()=>SearcHistory(e._id)} key={e._id}>          
              <img src={e.image} alt={e.history} className="imgPaper" />           
          </Paper>
        );
      })}
    </div>
  );
}
