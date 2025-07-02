import React from "react";

const Background = ({ bgheading, para1, para2 }) => {
  return (
    <>
      <div
        className="container-fluid background-container"
        style={{
          backgroundImage: `url("/images/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h3 className="bgheading">{bgheading}</h3>
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
    </>
  );
};

export default Background;
