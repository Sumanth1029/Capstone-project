import React from "react";

export const Cards = (props) => {
  return (
    <div className="mcard">
      <div>
        <img className="cimage" src={props.data.imageURL} />
      </div>
      <div className="titleContainer">
        <div className="title">{props.data.title}</div>
        <div className="price">$ {props.data.price}</div>
      </div>
      <div className="description">{props.data.description}</div>
      <div className="cbutton">Order a delivery</div>
    </div>
  );
};
