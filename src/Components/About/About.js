import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="main-section about">
      <div className="about-card">
        <h3>About Curenetics</h3>
        <br />
        <p>
          Curenetics is a system that seemlessly matches a cancer patient to clinical trials after
          considering patient’s preferences, unique genetic mutation in the cancer and best clinical
          match characteristics unique to every patient
        </p>
        <br />
        <p>
          Currently, when a cancer patient has been told there are no further treatment options for
          them, many are left to look for clinical trial opportunities without much support from the
          cancer teams.
        </p>
        <br />
        <p>
          There are clinical trials available but access to them depend on your location, your
          doctors knowledge of current trials and the ability of the patient to do a detailed search
          on google.
        </p>
      </div>
    </section>
  );
};

export default About;
