import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const SaveButton = () => {
  // adds a save button to save result as a pdf
  const saveTrial = () => {
    const input = document.querySelector(".save-pdf");
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

  return (
    <div className="card-row">
      <div>
        <button className="save-button" onClick={saveTrial}>
          <svg
            aria-labelledby="download"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <title id="download" lang="en">
              Download PDF
            </title>
            <path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z" />
          </svg>
        </button>
      </div>
      <div>
        <span className="small-heading">Click to save as a PDF to take to your doctor</span>
      </div>
    </div>
  );
};
export default SaveButton;
