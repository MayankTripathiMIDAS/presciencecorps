import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Homebanner from "../components/Homebanner";
import Infocard from "../components/Infocard";
import Hovercard from "../components/Hovercard";
import ExpertiseCard from "../components/ExpertiseCard";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prescience Corporation</title>
        <meta name="description" content="Prescience Corporation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("/images/view.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <Homebanner />
      </div>

      <Infocard />
      <div className="container-fluid">
        <h2 className="service-heading">Prescience Corporation - Services</h2>
        <div className="container">
          <div
            className="row"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <Hovercard
              styleName={"fa-address-card"}
              title={"Staffing Services"}
              sub={"Serving clients with superior processes"}
            />
            <Hovercard
              styleName={"fa-user-cog"}
              title={"Managed Services"}
              sub={"We are in staffing business since 2013"}
            />
            <Hovercard
              styleName={"fa-hands-helping"}
              title={"Enterprise Solutions"}
              sub={"Prescience Corporation' Consulting Focus on optimizing CQT"}
            />
            <Hovercard
              styleName={"fa-chalkboard-teacher"}
              title={"Management Consulting"}
              sub={
                "Prescience Corporation' best serves its clients by adhering to and executing superior processes."
              }
            />
            <Hovercard
              styleName={"fa-clinic-medical"}
              title={"Healthcare IT Solutions"}
              sub={
                "Prescience Corporation' best serves its clients by adhering to and executing superior processes."
              }
            />
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ background: "#28406d", marginTop: "30px" }}
      >
        <div className="container">
          <div className="row">
            <Benefit
              benefit="Perfect Match"
              text="Staffing Solutions for Your Business"
              forward={"/management-consulting"}
            />
            <Benefit
              benefit="Benefits? Yes"
              text="Get a job through us and you get access to some nice benefits."
              forward={"/healthcare-solutions"}
            />
            <Benefit
              benefit="Why Us?"
              text="Good jobs at good companies. Is it the right move for you?"
              forward={"/why-us"}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="service-heading" style={{ margin: "60px 0px" }}>
          Areas Of Expertise
        </h2>
        <div className="row">
          <ExpertiseCard src={"/images/team.jpg"} name="24x7 sourcing teams" />
          <ExpertiseCard
            src={"/images/delivery.jpg"}
            name="Delivery locations"
          />
          <ExpertiseCard src={"/images/goal.jpg"} name="Goal targets" />
          <ExpertiseCard
            src={"/images/service.jpg"}
            name="Service agreement adherence"
          />
          <ExpertiseCard src={"/images/quality.jpg"} name="Quality assurance" />
          <ExpertiseCard
            src={"/images/workflow.jpg"}
            name="In-house workflow system"
          />
          <ExpertiseCard
            src={"/images/technical.jpg"}
            name="Technical expertise"
          />
          <ExpertiseCard
            src={"/images/metric.jpg"}
            name="Metric based performance"
          />
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("/images/splash.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container"
          style={{ padding: "80px 0px", color: "white" }}
        >
          <h3>SUBMIT A STAFFING REQUEST</h3>
          <p>
            Fill out the request form a representative will get back to you
            shortly after.
          </p>
          <button className="call-button">
            SUBMIT A STAFFING REQUEST <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
