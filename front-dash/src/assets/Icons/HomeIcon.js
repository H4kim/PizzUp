import React from "react";

const Home = (props) => {
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 512 512"
        fill={props.color}
        className={props.styling}
      >
        <title>home</title>
        <g id="icomoon-ignore"></g>
        <path d="M512 295.222l-256-198.713-256 198.714v-81.019l256-198.713 256 198.714zM448 288v192h-128v-128h-128v128h-128v-192l192-144z"></path>
      </svg>
    </div>
  );
};

export default Home;
