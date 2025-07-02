import Background from "../components/Background";
import Navbar from "../components/Navbar";
import React from "react";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import Bgimage from "../components/Bgimage";
import Head from "next/head";

const mission = () => {
  return (
    <>
      <Head>
        <title>Prescience Corporation</title>
        <meta name="description" content="Prescience Corporation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="container-fluid ">
        <div className="row">
          <Bgimage />
          <div
            className="col-md-6"
            style={{ background: "#28406d", color: "white" }}
          >
            <div className="container">
              <h2 className="main-heading">Our Mission</h2>

              <p>
                The Mission at Prescience Corporation has been to provide
                exceptional staff augmentation services to our clients by
                Optimization of Cost, Quality & Time.
              </p>
              <div className="green-line"></div>
              <h2 className="main-headingsecond">Our Vision</h2>

              <p>
                We aspire to become the #1 staffing service provider across
                globe by providing world class services to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Background
        bgheading="Prescience Corporation UNIQUE APPROACH"
        para1="Our team works as advisors and consultant with clients and help them in their technology transformations. We map the technology experts with domain experience of clients."
        para2="This helps us understand the business problem and allow us to align the technology solution to solve the business problem with better client satisfaction."
      />
      <div className="container count-container">
        <div className="row">
          <h2 className="stats-heading">STATS THAT SPEAK ABOUT US </h2>
          <Counting
            icon="fas fa-user"
            count="40"
            titlename="Clients"
            iconBg={"#6CA04A"}
          />
          <Counting
            icon="fas fa-chalkboard-teacher"
            count="200"
            titlename="Consultants"
            iconBg={"#FDC210"}
          />
          <Counting
            icon="fas fa-greater-than-equal"
            count="10"
            titlename="Technology"
            iconBg={"#DB2029"}
          />
          <Counting
            icon="fas fa-industry"
            count="5"
            titlename="Industries"
            iconBg={"#F27935"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default mission;
