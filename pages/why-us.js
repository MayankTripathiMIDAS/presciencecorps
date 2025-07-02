import Background from "../components/Background";
import Navbar from "../components/Navbar";
import React from "react";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import Bgimage from "../components/Bgimage";
import Contactform from "../components/Contactform";
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
                We are equal opportunity employer
              </h2>
              <div className="green-line"></div>
              <p>
                At Prescience Corporation, we are committed to providing an
                environment of mutual respect where equal employment
                opportunities are available to all applicants and teammates
                without regard to race, color, religion, sex, pregnancy
                (including childbirth, lactation, and related medical
                conditions), national origin, age, physical and mental
                disability, marital status, sexual orientation, gender identity,
                gender expression, genetic information (including
                characteristics and testing), military, women, minority and
                veteran status, and any other characteristic protected by
                applicable law.
              </p>
              <p>
              Prescience Corporation believes that diversity and inclusion among
                our teammates are critical to our success as a global company,
                and we seek to recruit, develop and retain the most talented
                people from a diverse candidate pool.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Background
        bgheading="WORK WITH US!"
        para1="Join Prescience Corporation and start the excited journey. We are hiring for different skill sets across different locations in India and United States."
        para2=""
      />
      <div className="container">
        <h2 style={{ fontSize: "22px", textAlign: "center" }}>
          If you have any questions or seek additional information for any topic
          discussed herein, you may contact Prescience Corporation at (469) 361-2442
        </h2>
      </div>
      <div className="container">
        <div
          className="row"
          style={{ marginBottom: "80px", padding: "0px 35px" }}
        >
          <div className="col-md-6">
            <img
              className="contact-image"
              src="/images/illus.jpg"
              alt="contact-illustration"
            />
            <h2 className="contact-heading">Feel free to contact us!</h2>
            <p className="description">
              if you need any assistance, any help or another question.
            </p>
          </div>
          <div className="col-md-6">
            <Contactform />
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

export default workforce;
