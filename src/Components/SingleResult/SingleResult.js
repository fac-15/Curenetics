import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import StartingDate from "../Card/StartingDate";
import Phase from "../Card/Phase";
import Summary from "../Card/Summary";
import Keywords from "../Card/Keywords";
import "./single-result.css";

const saveTrial = () => {
  const input = document.querySelector(".card-inner");
  const options = {
    allowTaint: true,
    taintTest: false,
    height: null,
    width: null,
  };
  html2canvas(input, options).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", 10, 10, 200, 100);
    pdf.save("trial.pdf");
  });
};

const SingleResult = props => {
  console.log(props.location.params.item);
  const { item } = props.location.params;
  const index = props.location.params.item.IDInfo.OrgStudyID;
  return (
    <section className="main-section">
      <div className="card-inner">
        {/* <div className="card-row">{isRecruiting ? <Recruiting /> : <NotRecruiting />}</div> */}
        <div className="card-row">
          <div>
            <h3>{item.Keywords[0]}</h3>
          </div>
        </div>
        <StartingDate />
        <Phase />
        <Summary />
        <Keywords data={item.Keywords} style={{ padding: "100" }} />
      </div>
      <button onClick={saveTrial}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z" />
        </svg>
      </button>
    </section>
  );
};

export default SingleResult;
