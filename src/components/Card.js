import React from "react";
import '../styles/Components.css'
const Card = (props) => {
    return(
        <div className="card text-white bg-primary mb-3">
  <div className="card-header">{props.header}</div>
  <div className="card-body">
    <h4 className="card-title">{props.title}</h4>
    <p className="card-text">{props.text}</p>
  </div>
</div>
    );
}
export default Card;