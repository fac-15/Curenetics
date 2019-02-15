import React from "react";
import questions from "./questions";
import "./faq.css";

const Faq = () => {
  return (
    <section className="main-section">
      <h1>FAQ</h1>
      <ul className="faq-list">
        {questions.map(question => {
          return (
            <li className="small-card-q" key={question.question}>
              <h3>{question.question}</h3>
              <p>{question.answer}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;
