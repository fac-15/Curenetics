import React from "react";
import questions from "./questions";
import "./faq.css";

const handleClick = e => {
  e.target.classList.toggle("active");
  let panel = e.target.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
};

const Faq = () => {
  return (
    <section className="main-section">
      <h1>FAQ</h1>
      <ul className="faq-list">
        {questions.map(question => {
          return (
            <li className="small-card-q" key={question.question}>
              <button className="accordion" onClick={e => handleClick(e)}>
                {question.question}
              </button>
              <div className="panel">
                <p>{question.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;
