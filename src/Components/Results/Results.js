import React from 'react';
import './results.css';

const Results = (props) => {
  const resultsList = props.results.results;

  return (
    <div>
      <h3>Results</h3>
      {resultsList ? resultsList.map(item => <li key={item.IDInfo.OrgStudyID}><p>Gender: {item.Gender}</p>
        <p>name: {item.Locations[0].Facility.Name}</p>
        <p>Zip: {item.Locations[0].Facility.Address.Zip}</p>
        </li>) : <p>No results</p>}
    </div>
  );
}

export default Results;
