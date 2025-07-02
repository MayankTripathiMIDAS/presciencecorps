import Background from "../components/Background";
import Navbar from "../components/Navbar";
import React from "react";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import Bgimage from "../components/Bgimage";
import Solution from "../components/Solution";
import Candidates from "../components/Candidates";
import Head from "next/head";

const workforce = () => {
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
              <h2 className="main-heading">
                GLOBAL WORKFORCE SOLUTION PARTNERS
              </h2>
              <div className="green-line"></div>
              <p>
              Prescience Corporation has been in staffing business since 2013 and
                provides contract, contract to hire,Turnkey Project,direct hire
                as well as executive level headhunting services to its clients
                across United States. With a diverse client base we work in
                several verticals including IT, Banking, Financial Services,
                Insurance, Healthcare, High Tech and Retail.
              </p>
              <p>
              Prescience Corporation’ deep heritage, proven expertise and
                insightful market intelligence has secured long-term
                partnerships with Fortune 500 and government clients seeking
                world-class professional resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <Candidates
            icon={"fas fa-business-time"}
            smallhead="24×7 sourcing teams"
            paragraph="24 hours support teams, always ready to answer your queries."
          />
          <Candidates
            icon={"fas fa-map-marker-alt"}
            smallhead="Delivery locations"
            paragraph="Relationship management and service delivery teams located across globe."
          />
          <Candidates
            icon={"far fa-dot-circle"}
            smallhead="Goal targets"
            paragraph="Goal setting for each team member that is aligned with the clients’ own objective."
          />
          <Candidates
            icon={"fas fa-handshake"}
            smallhead="Service agreement adherence"
            paragraph="Client-wise service-level understanding and adherence"
          />
          <Candidates
            icon={"fas fa-check"}
            smallhead="Quality assurance"
            paragraph="Close monitoring of quality"
          />
          <Candidates
            icon={"fas fa-house-damage"}
            smallhead="In-house workflow system"
            paragraph="Strong in-house workflow system for resume search, screening, submittals and placements."
          />
          <Candidates
            icon={"far fa-id-card"}
            smallhead="Technical expertise"
            paragraph="Strong technical teams to ensure quality delivery to clients."
          />
          <Candidates
            icon={"fas fa-chart-line"}
            smallhead="Metric based performance"
            paragraph="Metric-based performance monitoring for all team members."
          />
        </div>
      </div>
      <Background
        bgheading="Prescience Corporation UNIQUE APPROACH"
        para1="Prescience Corporation’ Consulting Focus on optimizing CQT which are Cost Quality & Time and provides the most innovative, efficient and cost-effective workforce solutions in today’s marketplace."
        para2="Prescience Corporation’ Team leverages its mature, quality-certified processes to provide a variety of standard and customized solutions and programs to help clients optimize their supply chain and increase time to market of their workforce requirements, hence, accelerate project progress."
      />
      <Solution />
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

export default workforce;
