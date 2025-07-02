import Link from "next/link";
import React from "react";

const Benefit = ({ benefit, text, forward }) => {
  return (
    <>
      <div className="col-md-4 benefit-card">
        <div className="benefit-text">
          <h2>{benefit}</h2>
          <div className="short-line"></div>
          <p>{text}</p>
        </div>
        <Link href={forward}>
          Learn more <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Benefit;
