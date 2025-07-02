import Link from "next/link";
import React from "react";

const Homebanner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-5 blue-container">
              <h2>SERVING CLIENTS WITH SUPERIOR PROCESSES</h2>
              <div className="green-line"></div>
              <div className="banner-info">
                <p>
                 Prescience Corporation best serves its clients by adhering to and
                  executing superior processes.
                  <br /> The company is dedicated to operational excellence as
                  part of a client-centric mindset that assures consistent
                  execution.
                </p>
                <p>
                  Through years of cumulative experience, Prescience Corporation
                  has developed and refined every step in the full life cycle
                  staffing fulfillment and consultant management practice
                </p>
                <Link href="/why-us">
                  <button className="call-button">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
