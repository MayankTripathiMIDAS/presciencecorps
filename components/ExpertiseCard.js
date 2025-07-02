import React from "react";

const ExpertiseCard = ({ src, name }) => {
  return (
    <>
      <div class="col-md-3 card-block" style={{ padding: "0" }}>
        <img
          src={src}
          alt="Notebook"
          style={{ width: "100%", height: "100%" }}
        />
        <div class="content">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  );
};

export default ExpertiseCard;
