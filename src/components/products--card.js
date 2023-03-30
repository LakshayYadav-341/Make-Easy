import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="project--card--template products-card">
      <img
        className="productsImg"
        src={props.image}
        data-aos="fade-left"
        alt=""
      />
      <div>
        <h1>{props.heading}</h1>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}