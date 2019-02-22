import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="main-section about">
      <h1>About Curenetics</h1>
      <div className="about-card">
        <h3>Match patients to best clinical trials</h3>
        <br />
        <p>
          In diseases, such as cancer, through our machine learning-driven algorithms, domain
          expertise and ability to combine cancer molecular profiling data, we are giving patients
          hope by helping to recruit them to most suitable clinical trials. At the same time helping
          trial sponsors meet recruitment targets and hence save costs and reduce time to trial
          completion.
        </p>
        <br />
        <h3>Data analysis of in cancer</h3>
        <br />
        <p>
          Huge amounts of patient data are sitting in data silos in the NHS and in various health
          systems across the world. With relevant ethical approval and consent, we would analyse
          some of these data relevant to select disease populations and see how we can improve
          quality of care and access to treatment options or trials that may be previously unknown
          to patients and their clinicians.
        </p>
        <br />
        <h3>Dr Sola Adeleke</h3>
        <h4>MRCP, MBA Oncology Research</h4>
        <h4>Fellow Founder and CEO of Curenetics</h4>
        <br />
        <p>
          Sola is the founder of Curenetics (formerly Aurora Medical Innovations) and an NHS England
          Clinical Entrepreneur . He is an oncologist with extensive experience in clinical trials,
          a clinical research fellow at UCL and is actively involved in cancer research. Sola is
          devoted to making clinical trials more accessible to patients and clinicians. His team is
          using cutting edge match algorithms, data filtering techniques and machine learning to
          match the right patients to the right trials within the NHS
        </p>
      </div>
    </section>
  );
};

export default About;
