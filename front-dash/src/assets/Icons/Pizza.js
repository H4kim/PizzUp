import React from "react";

const Pizza = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill={props.color}
      className={props.styling}
      viewBox="0 0 768 768"
    >
      <title>fire</title>
      <g id="icomoon-ignore"></g>
      <path d="M384 480q25.5 0 45-19.5t19.5-45-19.5-44.25-45-18.75-45 18.75-19.5 44.25 19.5 45 45 19.5zM223.5 223.5q0 25.5 19.5 45t45 19.5 45-19.5 19.5-45-19.5-44.25-45-18.75-45 18.75-19.5 44.25zM384 64.5q172.5 0 288 127.5l-288 511.5-288-511.5q115.5-127.5 288-127.5z"></path>
    </svg>
  );
};

export default Pizza;
