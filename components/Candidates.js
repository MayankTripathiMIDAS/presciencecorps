import React from "react";

const Candidates = ({ icon, smallhead, paragraph }) => {
  return (
    <>
      <div
        className="col-md-3 d-flex flex-column align-items-center"
        style={{
          padding: "0px 27px",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <i
          class={icon}
          style={{ color: "#28406d", fontSize: "50px", marginBottom: "20px" }}
        ></i>
        <h5 className="candidate-head">{smallhead}</h5>
        <p style={{ color: "#86898B" }}>{paragraph}</p>
      </div>
    </>
  );
};

export default Candidates;
