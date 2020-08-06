import React from "react";

const Question = (props) => {
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 512 512"
        fill={props.color}
      >
        <title>credit-card</title>
        <g id="icomoon-ignore"></g>
        <path d="M224 352h64v64h-64zM352 128c17.673 0 32 14.327 32 32v96l-96 64h-64v-32l96-64v-32h-160v-64h192zM256 48c-55.559 0-107.792 21.636-147.078 60.922s-60.922 91.519-60.922 147.078c0 55.559 21.636 107.792 60.922 147.078s91.519 60.922 147.078 60.922c55.559 0 107.792-21.636 147.078-60.922s60.922-91.519 60.922-147.078c0-55.559-21.636-107.792-60.922-147.078s-91.519-60.922-147.078-60.922zM256 0v0c141.385 0 256 114.615 256 256s-114.615 256-256 256c-141.385 0-256-114.615-256-256s114.615-256 256-256z"></path>
      </svg>
    </div>
  );
};

export default Question;
