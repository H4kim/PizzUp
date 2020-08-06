import React from "react";

const Coffee = (props) => {
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
      <path d="M128 352h-64c-35.346 0-64-28.654-64-64v0-128c0-35.2 28.8-64 64-64h64v-64h448v320c0 70.692-57.308 128-128 128v0h-192c-70.692 0-128-57.308-128-128v0zM128 288v-128h-64v128h64zM64 544v-32h576v32l-128 64h-320l-128-64z"></path>
    </svg>
  );
};

export default Coffee;
