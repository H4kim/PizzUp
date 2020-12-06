import React from "react";

const Drink = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill={props.color}
      className={props.styling}
      viewBox="0 0 640 640"
    >
      <title>fire</title>
      <g id="icomoon-ignore"></g>
      <path d="M288 576v-224l-288-288v-64h640v64l-288 288v224l160 32v32h-384v-32l160-32zM352 256c35.346 0 64-28.654 64-64s-28.654-64-64-64v0c-35.346 0-64 28.654-64 64s28.654 64 64 64v0z"></path>
    </svg>
  );
};

export default Drink;
