import Background from "../components/Background";
import Navbar from "../components/Navbar";
import React from "react";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import Bgimage from "../components/Bgimage";
import Head from "next/head";

const company = () => {
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
              <h2 className="main-heading">About Prescience Corporation</h2>
              <div className="green-line"></div>
              <p>
                Established in 2012, Prescience Corporation is an IT Solutions
                provider company with presence across globe having offices USA,
                Canada, India, Dubai. We specialize in various areas including
                Cloud native application development, Cloud (Azure, AWS, GCP,
                Oracle) Infrastructure Architecture and Administration, Web
                Application Development, IT Infrastructure and Applications
                Managed Services, SAP Application Architecture, Development and
                Administration, IoT (Internet of Things) Device management,
                DevOps and Robotic Process Automation.
              </p>
              <p>
                We help in digital transformation for various industries which
                includes clients from Healthcare, Energy & Utilities, Oil & Gas,
                Pharmaceuticals, Manufacturing. We provide an array of
                innovative solutions by leveraging the state of art
                infrastructure and latest technologies. We have established
                global development centers in United States, India, Canada and
                Dubai.
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

export default company;
