import React, { useState } from "react";
import "./AsideLeft.css";
import Paper from "@material-ui/core/Paper";
export default function AsideLeft(props) {
  const [historys, sethistory] = useState([
    {
      id: "0",
      history: "Car",
      image:
        "https://static.dezeen.com/uploads/2019/08/bmw-vantablack-car-design_dezeen_2364_sq-1.jpg",
    },
    { id: "1", history: "Travel", image: "https://www.revistaebs.com.br/wp-content/uploads/2017/12/incentivo-revista-ebs-1.jpg" },
    { id: "2" },
  ]);
  
function SearcHistory(id){
props.search(id)
}

  return (
    <div className="asideLeft">
      {historys.map((e) => {
        return (

          <Paper elevation={2} className="btnHistory" onClick={()=>SearcHistory(e.id)}>          
              <img src={e.image} alt={e.history} className="imgPaper" />           
          </Paper>
        );
      })}
    </div>
  );
}
