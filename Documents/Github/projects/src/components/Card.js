import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        width: "12vw",
        maxHeight: "14vw",
        minHeight: "14vw",
      }}
    >
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}>
          {props.title}
        </h5>
        <div
          className="button-container"
        >
          <a className="btn btn-primary" href={props.page} target="_blank">
            Demo
          </a>
          <a
            className="btn btn-outline-secondary"
            href={props.git}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
