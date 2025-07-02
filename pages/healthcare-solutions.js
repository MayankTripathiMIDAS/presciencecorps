import Background from "../components/Background";
import Navbar from "../components/Navbar";
import React from "react";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import Bgimage from "../components/Bgimage";
import Head from "next/head";
import Candidates from "../components/Candidates";

const healthcare = () => {
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
                Staffing solutions for Healthcare
              </h2>
              <div className="green-line"></div>
              <p>
                Healthcare Information Technology has changed the landscape of
                how hospitals and health facilities operate.
              </p>
              <p>
                This has given rise to a number of career areas that clinical
                facilities are unable to fill on their own.
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
        bgheading="FULFILLING YOUR HEALTHCARE STAFFING NEEDS"
        para1="Prescience Corporation has a history of serving healthcare facilities & hospitals around the United States and catering to their clinical as well as IT Healthcare positions."
        para2=""
      />
      <div
        className="container solution"
        style={{ textAlign: "center", marginTop: "60px", marginBottom: "60px" }}
      >
        <h1 style={{ marginBottom: "50px" }}>
        Prescience Corporation offering for Healthcare
        </h1>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-4 solution-card-healthcare">
            <p>Medical coding</p>
          </div>
          <div className="col-md-4  solution-card-healthcare">
            <p>Hospital administration & management</p>
          </div>
          <div className="col-md-4  solution-card-healthcare">
            <p>Business intelligence</p>
          </div>
          <div className="col-md-4 solution-card-healthcare">
            <p>EMR implementation consultants</p>
          </div>
          <div className="col-md-4 solution-card-healthcare">
            <p>Interoperability analysts</p>
          </div>
        </div>
      </div>
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

export default healthcare;
