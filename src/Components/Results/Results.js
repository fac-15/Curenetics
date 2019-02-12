import React from "react";
import "./results.css";

const Results = props => {
  const resultsList = props.results.results;
  const error = props.error;

  return (
    <section className="main-section">
      <h3>Results</h3>
      {resultsList ? (
        resultsList.map(item => (
          <li key={item.IDInfo.OrgStudyID}>
            <p>Gender: {item.Gender}</p>
            <p>Location : {item.Locations[0].Facility.Name}</p>
            <p>Zip: {item.Locations[0].Facility.Address.Zip}</p>
            <p>
              Recruiting:{" "}
              {item.Locations[0].Status ? item.Locations[0].Status : "N/A"}
            </p>
            <ul>
              Conditions:
              {item.Conditions.map(con => (
                <li key={con} style={{ marginLeft: "2rem" }}>
                  {con}
                </li>
              ))}
            </ul>
          </li>
        ))
      ) : (
        <p>No results</p>
      )}
    </section>
  );
};

export default Results;
