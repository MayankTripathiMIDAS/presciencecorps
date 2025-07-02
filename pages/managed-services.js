import Background from "../components/Background";
import Navbar from "../components/Navbar";
import React from "react";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import Bgimage from "../components/Bgimage";
import Candidates from "../components/Candidates";
import Solution from "../components/Solution";
import Head from "next/head";

const managed = () => {
  return (
    <>
      <Head>
        <title>Prescience Corporation</title>
        <meta name="description" content=" Prescience Corporation" />
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
                Global Workforce Solution Partners
              </h2>
              <div className="green-line"></div>
              <p>
              Prescience Corporation Consulting has been in staffing business
                since 2013 and provides contract, contract to hire,Turnkey
                Project,direct hire as well as executive level headhunting
                services to its clients across United States.
              </p>
              <p>
                With a diverse client base we work in several verticals
                including IT, Banking, Financial Services, Insurance,
                Healthcare, High Tech and Retail.
              </p>
              <p>
              Prescience Corporation deep heritage, proven expertise and
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
            icon={"far fa-id-card"}
            smallhead="Qualified candidates on demand"
            paragraph="Turn around with qualified candidates within hours."
          />
          <Candidates
            icon={"fas fa-users"}
            smallhead="Dedicated Teams"
            paragraph="Dedicated Team for your account."
          />
          <Candidates
            icon={"fas fa-chalkboard-teacher"}
            smallhead="Validated candidates"
            paragraph="100% Screening of candidates."
          />
          <Candidates
            icon={"far fa-star"}
            smallhead="Everything that your business needs"
            paragraph="One stop shop for filling all requirements across skills sets and locations."
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

export default managed;
