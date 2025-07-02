import React from "react";

const Solution = () => {
  return (
    <>
      <div
        className="container solution"
        style={{ textAlign: "center", marginTop: "60px", marginBottom: "60px" }}
      >
        <h1>Prescience Corporation' key workforce solutions are:</h1>
        <div className="row">
          <span>
            Before embarking on any major investment plan in equities and bonds,
            the reader is well advised to ensure that the basic necessities of
            life are fulfilled.
          </span>

          <div className="col-md-4 solution-card">
            <p>Advisory</p>
          </div>
          <div className="col-md-4  solution-card">
            <p>Consulting</p>
          </div>
          <div className="col-md-4  solution-card">
            <p>Optimization</p>
          </div>
          <div className="col-md-4 solution-card">
            <p>Staff Augmentation</p>
          </div>
          <div className="col-md-4 solution-card">
            <p>Managed Services</p>
          </div>
          <div className="col-md-4 solution-card">
            <p>Support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
