import React from "react";
import CountUp from "react-countup";

const Counting = ({ titlename, count, icon, iconBg }) => {
  return (
    <>
      <div className="col-md-3 counting-box">
        <span
          style={{
            fontSize: "28px",

            padding: "15px",
            borderRadius: "50px",
            backgroundColor: iconBg,
          }}
        >
          <i class={icon} style={{ color: "white" }}></i>
        </span>
        <CountUp
          style={{ marginTop: "10px", fontSize: "33px" }}
          end={count}
          suffix="+"
        />
        <p className="count-title">{titlename}</p>
      </div>
    </>
  );
};

export default Counting;
