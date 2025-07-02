import React from "react";

const Infocard = () => {
  return (
    <>
      <div className="container">
        <div className="card-structure">
          <div className="col-md-5">
            <h3>ABOUT Prescience Corporation</h3>
            <p>
              We help in digital transformation for various industries which
              includes clients from Healthcare, Energy & Utilities, Oil & Gas,
              Pharmaceuticals, Manufacturing.
            </p>
            <p>
              We provide an array of innovative solutions by leveraging the
              state of art infrastructure and latest technologies. We have
              established global development centers in United States, India,
              Canada and Dubai.
            </p>
          </div>
          <div class="vl"></div>
          <div className="col-md-5">
            <h3>Prescience Corporation UNIQUE APPROACH</h3>
            <p>
              Our team works as advisors and consultant with clients and help
              them in their technology transformations. We map the technology
              experts with domain experience of clients.
            </p>
            <p>
              This helps us understand the business problem and allow us to
              align the technology solution to solve the business problem with
              better client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infocard;
