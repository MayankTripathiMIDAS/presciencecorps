import React from "react";

const Hovercard = ({ styleName, title, sub }) => {
  return (
    <>
      <div className="col-md-4">
        <div class="card1">
          <i aria-hidden="true" className={`fas ${styleName}`}></i>
          <h3>{title}</h3>
          <p class="small">{sub}</p>
        </div>
      </div>
    </>
  );
};

export default Hovercard;
